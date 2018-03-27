class ApplicationMailer < ActionMailer::Base
  default from: 'ben@bengreenberg.org'
  layout 'mailer'

  def new_user_email(user)
    @user = user
    mail(to: 'bengreenberg@gmail.com', subject: 'New User Signed Up To Rechov Aliyah')
  end

  def new_post_email(post)
    @post = post
    mail(to: 'bengreenberg@gmail.com', subject: 'New Post on Rechov Aliyah')
  end
end
