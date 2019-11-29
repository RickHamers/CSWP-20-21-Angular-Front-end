import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AdvertisementService } from '../../../services/advertisement.service';
import {Observable, Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: ['./advertisement-detail.component.scss']
})
export class AdvertisementDetailComponent implements OnInit, OnDestroy {

  isLoggedIn$: Observable<boolean>;
  loggedInUsername: string;
  advertisement;
  selectedComment;
  isLoading: boolean = true;
  isBiddingTableLoading: boolean = false;
  isBiddingTableSubmitLoading: boolean = false;
  isEmptyComments: boolean = false;
  isAdvertisementAuhorLoginName: boolean = false;
  bidForm: FormGroup;
  commentForm: FormGroup;
  replyCommentForm: FormGroup;
  updateCommentForm: FormGroup;
  newComments = [];
  newBids = [];
  getAdvertisementSubscription: Subscription;
  @ViewChild ('replyModal', { static: false }) public replyModal: ElementRef;
  @ViewChild ('updateModal', { static: false }) public updateModal: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private advertisementService: AdvertisementService,
    private authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
    this.isLoading = true;
    this.isBiddingTableLoading = true;
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.activatedRoute.params.subscribe(
      (result) => {
        this.getAdvertisementSubscription = this.advertisementService.getAdvertisement(result.id)
        .subscribe(
          (result) => {
            this.advertisement = result;
            this.processComments();
            this.isLoading = false;
            this.isBiddingTableLoading = false;
          });
      });

    this.bidForm = new FormGroup({});
    this.bidForm.addControl('bidAmount', new FormControl(null, [Validators.required]))

    this.commentForm = new FormGroup({});
    this.commentForm.addControl('comment', new FormControl(null, [Validators.required]));

    this.replyCommentForm = new FormGroup({});
    this.replyCommentForm.addControl('comment', new FormControl(null, [Validators.required]));

    this.updateCommentForm = new FormGroup({});
    this.updateCommentForm.addControl('comment', new FormControl(null, [Validators.required]));
  }

  processComments(){
    this.newComments = [];
    this.unwindComments(this.advertisement.comments);
    this.advertisement.comments = this.newComments;
    this.loggedInUsername = this.authService.returnUsername();
    if (this.authService.returnUsername() === this.advertisement.username) {
      this.isAdvertisementAuhorLoginName = true; }

    //Check for empty comments
    if(this.advertisement.comments == ""){
      console.log('No comments found')
      this.isEmptyComments = true;
    } else {
      this.isEmptyComments = false;
      console.log('Found comments')
    }
  }

  private unwindComments(comments) {
    this.recursiveUnwind(comments, 0);
  }

  private recursiveUnwind(comments, depth: number) {
    for(let comment of comments){
      comment.depth = depth;
      this.newComments.push(comment);
      this.recursiveUnwind(comment.comments, depth + 1);
    }
  }

  ngOnDestroy(): void {
    if (this.getAdvertisementSubscription !== undefined) {
      this.getAdvertisementSubscription.unsubscribe();
    }
  }

  onSubmitBid() {
    this.isBiddingTableLoading = true;
    this.isBiddingTableSubmitLoading = true;
    console.log('onSubmitBid')
    this.advertisementService.postBid(this.advertisement._id, this.bidForm.value['bidAmount'])
    .subscribe(
      () => {
        this.advertisementService.getAdvertisement(this.advertisement._id)
        .subscribe(
          (result) => {
            this.bidForm.reset();
            this.advertisement = result;
            this.processComments();
            this.isBiddingTableLoading = false;
            this.isBiddingTableSubmitLoading = false;
            console.log('bid succeeded');
          }
        )
      },
      () => {
        this.isBiddingTableLoading = false;
        this.isBiddingTableSubmitLoading = false;
        console.log('bid failed');
      }
    )
  }

  onSubmitAdvertisementComment() {
    const comment = this.commentForm.value['comment'];
    this.advertisementService.postCommentOnAdvertisement(comment, this.advertisement._id)
      .subscribe(
        () => {
          this.advertisement.comments.push({
            content: comment,
            username: this.authService.returnUsername(),
            depth: 0
          });
          this.advertisementService.getAdvertisement(this.advertisement._id)
          .subscribe(
            (result) => {
              this.commentForm.reset();
              this.advertisement = result;
              this.processComments();
              console.log('comment succeeded');
            }
          )    
        },
        () => {
          console.log('comment failed');
        }
      );
  }

  onSubmitReplyComment(advertisementId, commentId) {
    const replyCommentContent = this.replyCommentForm.value['comment'];
    this.advertisementService.postCommentOnComment(replyCommentContent, advertisementId, commentId)
      .subscribe(
        () => {
          this.advertisementService.getAdvertisement(advertisementId)
          .subscribe(
            (result) => {
              this.replyCommentForm.reset();
              this.advertisement = result;
              this.processComments();
              this.replyModal.nativeElement.click();
              console.log('comment succeeded');
            }
          )
        },
        () => {
          console.log('comment failed');
        }
      );
  }

  onSubmitUpdateComment(commentId) {
    const updateCommentContent = this.updateCommentForm.value['comment'];
    this.advertisementService.updateComment(commentId, updateCommentContent)
      .subscribe(
        () => {
          this.advertisementService.getAdvertisement(this.advertisement._id)
            .subscribe(
              (result) => {
                this.advertisement = result;
                this.processComments();
                this.updateModal.nativeElement.click();
                this.updateCommentForm.reset();
                console.log('comment succeeded');
                
              }
            )
        },
        () => {
          console.log('comment failed');
        }
      );
  }

  onDeleteComment(commentId){
    console.log("OndeleteComment(" + commentId + ")")
    this.advertisementService.deleteComment(commentId)
    .subscribe(
      () => {
        this.advertisementService.getAdvertisement(this.advertisement._id)
        .subscribe(
          (result) => {
            this.advertisement = result;
            this.processComments();
            console.log('delete comment succeeded');
            this.updateModal.nativeElement.click();
            this.updateCommentForm.reset();
          }
        )
      },
      () => {
        console.log('delete comment failed');
      }
    )
  }

  openModal(comment){
    console.log('openModal()');
    this.selectedComment = comment;
  }

  onDelete() {
    const advertisementId = this.advertisement._id;
    this.advertisementService.deletAdvertisement(advertisementId)
      .subscribe(
        () => {
          console.log('delete advertisement succeeded');
          this.router.navigate(['/advertisement/index']);
        },
        () => {
          console.log('delete advertisement failed');
      }
    );
  }
}
