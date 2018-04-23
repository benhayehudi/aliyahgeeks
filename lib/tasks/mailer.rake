namespace :mailer do
  desc "Send Write Posts Reminder"
  task :post_reminder => :environment do
    UserMailer.write_posts_reminder.deliver
  end

end
