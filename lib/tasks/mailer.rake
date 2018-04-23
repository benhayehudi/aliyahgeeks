namespace :mailer do
  desc "Send Write Posts Reminder"
  task :post_reminder => :environment do
    date = Date.today
    if date.monday? && date.cweek.even?
      # UserMailer.write_posts_reminder.deliver
      runner "UserMailer.write_posts_reminder.deliver"
    end
  end

end
