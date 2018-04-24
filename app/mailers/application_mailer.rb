class ApplicationMailer < ActionMailer::Base
  default from: 'ben@bengreenberg.org'
  layout 'mailer'

  def new_user_admin_email(user)
    @user = user
    mail(to: 'bengreenberg@gmail.com', subject: 'New User Signed Up To Rechov Aliyah')
  end

  def new_user_email(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to Rechov Aliyah!')
  end

  def new_post_email(post)
    @post = post
    mail(to: 'bengreenberg@gmail.com', subject: 'New Post on Rechov Aliyah')
  end

  def write_posts_reminder 
    @users = []
    @users << User.left_outer_joins(:posts).where(posts: {id: nil})
    @users << User.joins(:posts).where('posts.created_at <= ?', 2.week.ago).uniq
    @users.each do |user|
      mail(to: user.email, subject: 'Share a Blog Post on Rechov Aliyah Today!') do |format|
        format.html {
          render locals: { first_name: user.first_name }
        }
      end
    end
  end
end
