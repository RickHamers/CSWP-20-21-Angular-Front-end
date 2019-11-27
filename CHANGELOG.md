# Changelog

## [RHa] - Version 2.6.4 - 2019-11-27
### Update forms to be cleared after submissions
* Update form functionalities to clear the forms they adhere to after submissions

## [RHa] - Version 2.6.3 - 2019-11-27
### Update delete user functionality
* Add functionality to log the user out once the account has been deleted

## [RHa] - Version 2.6.2 - 2019-11-27
### Add handling for empty responses/objects
* Add placeholders & handling for empty advertisement index/comments
* Add UI styling to Delete Account button in profile component

## [RHa] - Version 2.6.1 - 2019-11-27
### Fix delete user functionality
* Fix 404 - Not found upon calling deleteUser()
* Add closing modal and routing to /login on account deletion

## [RHa] - Version 2.6.0 - 2019-11-26
### Add initial delete user functionality & UI
* Update profile.component to include delete account functionality & UI
* Add deleteUser() functionality to authService

## [RHa] - Version 2.5.0 - 2019-11-25
### Add initial bidding functionality & UI
* Update about-summary.component to include bid entities & bidding list

## [RHa] - Version 2.4.2 - 2019-11-25
### Fix status 422 upon posting a bid
* Change returnUsername to returnUsername() to fix 422: unprocessable entity
* Add placeholder bids to advertisement-detail.component.html's table to show bid objectId's

## [RHa] - Version 2.4.1 - 2019-11-22
### Add initial loading for advertisement index
* Add initial rework of advertisement-index.component to implement loading.

## [RHa] - Version 2.4.0 - 2019-11-22
### Add delete comment functionality
* Add delete comment logic & UI elements
* Rework AddCommentToAdvertisement to fix commentId = undefined on initial creation of an advertisement

## [RHa] - Version 2.3.4 - 2019-11-22
### General cleanup/refactoring/fixes
* Cleanup code/Refactor code
* Fix advertisement-detail component UI
* Add grid system & bidding table to advertisement-detail component
* Add input & button to bidding table

## [RHa] - Version 2.3.3 - 2019-11-22
### Improve form styling 
* Improve SCSS for Login, Register and Change Password forms
* Move Login & Register components to "auth" folder
* Fix routing/import issues for Login & Register components

## [RHa] - Version 2.3.2 - 2019-11-21
### Fix reply/update comments mappings & retrieval
* Rectify issue of incorrect comment retrieval
* Fix component refresh after update/reply
* Add initial bidding list

## [RHa] - Version 2.3.1 - 2019-11-19
### Fix reply/update comments & UI
* Rectify issue of not being able to reply to comments
* Add small UI/logic tweaks/cleanup/fixes

## [RHa] - Version 2.3.0 - 2019-11-18
### Add account functionality
* Add change password functionality
* Add profile placeholder
* Add accout component with child-routing to profile & change password
* Update navigation menu to reflect the new implementations

## [RHa] - Version 2.2.0 - 2019-11-18
### Initial edit comment & reply
* Add initial edit comment functionality (to be completed)
* Add initial reply to comment functionality (to be completed)

## [RHa] - Version 2.1.3 - 2019-11-18
### Fix advertisement.component routing
* Rectify incorrect routing tags

## [RHa] - Version 2.1.2 - 2019-11-18
### Fix incorrect child-routing
* Rectify incorrect routing tags

## [RHa] - Version 2.1.1 - 2019-11-15
### Fix 7 tests
* Fix 7 failing test

## [RHa] - Version 2.1.0 - 2019-11-15
### Update navigation menu & enviroments
* Additions/Changes to the navigation menu
* Add localhost:3000 adress to non-production environment

## [RHa] - Version 2.0.1 - 2019-11-15
### Generic additions and fixes
* Add placeholder modals for reply and edit/delete comment functionality
* Add preparations for reply and edit/delete comment functionality
* Rectify errors in about/summary page
* Add use-cases to the about/use-cases page

## [RHa] - Version 2.0.0 - 2019-11-15
### Add authentication guard
* Add authentication guard service
* Add authentication gatekeeping to advertisement functionality routing

## [RHa] - Version 1.9.1 - 2019-11-15
### Fix build error
* Fix Heroku build
* Rectify CHANGELOG.md issues

## [RHa] - Version 1.9.0 - 2019-11-15
### Add edit advertisement functionality
* Add edit advertisement component
* Add edit advertisement routing
* Add edit advertisement functionality
* Refactor/Code cleanup

## [RHa] - Version 1.8.1 - 2019-11-15
### Fix child routing
* Fix child routing for several components
* Refactor several components
* Code cleanup

## [RHa] - Version 1.8.0 - 2019-11-15
### Add about component child routing
* Add child routing for about
* Split about into multiple components

## [RHa] - Version 1.7.0 - 2019-11-14
### Temporary login fix
* Add temporary /login navigation item to the navigation menu

## [RHa] - Version 1.7.0 - 2019-11-14
### Add initial advertisement functionality
* Add advertisement service
* Add initial get & create advertisement views
* Add initial get & create advertisement functionality

## [RHa] - Version 1.6.1 - 2019-11-14
### Update/Fix navigation-menu.component
* Update/Fix navigation-menu.component colour
* Update/Fix navigation-menu.component routing
* Update/Fix not-found.component position
* Re-route login button to new component (to be added)

## [RHa] - Version 1.6.0 - 2019-11-14
### Add logout functionality
* Add logout button to navigation-menu.component
* Add logout function to authentication.service
* Add show/hide button based on isLoggedIn observable

## [RHa] - Version 1.5.0 - 2019-11-14
### Add register functionality
* Add register.component
* Add form to register.component.html
* Add /register route

## [RHa] - Version 1.4.1 - 2019-11-13
### Fix login functionality
* Fix login functionality formsModule
* Rectify layout issues
* Fix component tests

## [RHa] - Version 1.4.0 - 2019-11-13
### Update login functionality
* Add form to login.component.html
* Add authentication.service.ts 
* Add back-end API connection

## [RHa] - Version 1.3.0 - 2019-11-13
### Update about component
* Add content to about.component.html
* Add image to assets/img
* Refactor to ZolderOpruiming case

## [RHa] - Version 1.2.0 - 2019-11-13
### Initial Navigation
* Add navigation-menu component
* Rectify styling & page layout
* Add simple side-bar menu

## [RHa] - Version 1.1.0 - 2019-11-13
### Initial Routing
* Add login component
* Edit not-found component
* Add bootstrap 
* Add routes & redirects

## [RHa] - Version 1.0.0 - 2019-11-12
### Initial setup
* Define basic project structure
* Add basic setup & configuration
* Add start scripts & dependencies
* Add production build requirements
* Add AboutComponent and NotFoundComponent

