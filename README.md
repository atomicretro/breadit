**en·jamb·ment** - /inˈjambmənt/ - _noun_<br>
(in verse) the continuation of a sentence without a pause beyond the end of a line, couplet, or stanza.

# ENJAMBMENT
Enjambment is a single-page poetry annotation webapp loosely inspired by [Genius.com](https://www.genius.com). It is a platform where lovers (and haters!) of poetry can get together to upload, discuss, vote on, and annotate their favorite (and least favorite!) poets and poems. Users may create profiles, upload individual poems and authors, write comments, and annotate poems directly.

Enjambment has a React / Redux front end communicating with a Ruby on Rails back end and a PostgreSQL database. It is currently hosted on [GitHub](https://github.com) and [Heroku](https://heroku.com). It was made by one person over the course of a month as a proof of concept, and is a labor of love.

## The Front End
Enjambment's front end is written entirely in React / Redux and Javascript, with jQuery being used solely to send AJAX requests to the Rails back end. The React / Redux flow allows enjambment to remain continuous and quick, giving users the illusion of browsing multiple webpages without jarring re-renders. The Redux store is kept normalized through specifically worded AJAX requests keeping the site responsive and lean.

The design philosophy of enjambment was "serenity". The floral color palette of pastel greens and reds invokes nature. Color is used sparingly to heighten its effects in links and annotations. The site's design was purposefully left clean in the hopes of inspiring a sense of peace in its users, to be an oasis in an otherwise hectic Internet. Negative space is used to direct the user's eyes to the important information on the page: submission forms, comment boxes, the poetry itself. When annotating, that negative space is turned into the annotation box itself, allowing all screen real estate to serve both a presentational and functional purpose.

## The Back End
Enjambment's back end is written in Ruby on Rails with a PostgreSQL database. A RESTful JSON API helps maintain readable, convention-abiding code. Specifically worded AJAX requests from the front end keep SQL lookups speedy, reducing lag time in communicating with the database. Polymorphic associations on comments and voting keeps code DRY.

Security on the back end is maintained through strong Rails Model validation and SQL escaping. Unacceptable form parameters are blocked. All user passwords are salted and hashed before being saved to the database. Session keys are discarded upon user logout to ensure account integrity.

## Annotations
The pride of enjambment is it's annotation platform. Created by scratch entirely in Javascript, enjambment's annotation platform allows any part of any uploaded poem to be directly commented on and discussed. 
