Sessions & Cookies
===

## SWBATs
- Describe the stateless nature of HTTP
- Explain how cookies give the server access to information about our site's users across requests
- Use the `session` hash to persist information and encrypt it
- Use the ApplicationController to share logic across other controllers in the application

**Problem Statement**: We want to start monetizing the content on our site through advertisements, so we need to add a paywall. After viewing a page on our site 5 times, they'll have to watch an ad before viewing any more pages.

### Outline
- [ ] Demo updated Rails application
- [ ] Discuss how websites use cookies
  - [ ] Twitter, NYTimes
- [ ] Use cookies to persist information about the client across requests
- [ ] Demonstrate the `session` hash in Rails
  - [ ] Get/set, encryption, clear
- [ ] Use the sessions to implement paywall

### Cookies

Cookies are small pieces of information that are sent from the server to the client; they are then stored on the client and sent back to the server with each subsequent request. HTTP is a **stateless** protocol since the server doesn't maintain information about each client for all requests. Cookies help make **stateful** HTTP requests by providing a mechanism for sending additional information to the server with each request.

Cookies are *domain-specific* - the browser stores cookies for each domain (e.g. www.nytimes.com) separately, and only cookies for that domain are sent back to the server with subsquent requests.

Cookies are typically use to store session information (user login/shopping cart/etc), personalization (user preferences/themes/etc) and tracking information (analyzing user behavior). 

In Rails, you can access the cookies hash from any controller/view:

_app/controllers/students_controller.rb_
```rb
def index
  if (params[:dark_mode] == 1) {
    cookies[:dark_mode] = 1
  }
  @dark_mode = cookies[:dark_mode]
end
```

Cookies in the browser are stored as plain text and can easily be manipulated by the user. 

### Sessions in Rails

From the [Rails Docs](https://guides.rubyonrails.org/security.html#sessions):

- HTTP is a stateless protocol. Sessions make it stateful.

```
Most applications need to keep track of certain state of a particular user. This
could be the contents of a shopping basket or the user id of the currently
logged in user. Without the idea of sessions, the user would have to identify,
and probably authenticate, on every request. Rails will create a new session
automatically if a new user accesses the application. It will load an existing
session if the user has already used the application.

A session usually consists of a hash of values and a session ID, usually a
32-character string, to identify the hash. Every cookie sent to the client's
browser includes the session ID. And the other way round: the browser will send
it to the server on every request from the client. In Rails you can save and
retrieve values using the session method:
```

```ruby
session[:page_count] ||= 0
@page_count = session[:page_count]
```

Rails provides several mechanisms for working with sessions. Cookies are the default option and easiest to configure.

More Info: [Action Controller Overview — Ruby on Rails Guides](https://guides.rubyonrails.org/action_controller_overview.html#session)
