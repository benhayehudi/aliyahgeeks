class User < ApplicationRecord
  has_many :posts
  has_many :posts, :through => :bookmarks
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  has_attached_file :image, styles: { icon: "32x32", small: "64x64", med: "100x100", large: "200x200" }, :path =>"app/assets/images/headshots/:filename", :url => "/assets/headshots/:filename"
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  def headshot_url
    image.url(:original)
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def user_posts 
    @posts = Post.all.where(user_id: self.id)
  end

  def user_bookmarks
    @bookmarkIds = Bookmark.all.where(user_id: self.id)
    @bookmarks = []
    @bookmarkIds.each do |bookmarkId|
      @bookmarks << Post.where(id: bookmarkId['post_id'])
    end
    return @bookmarks
  end

  def bookmark_count 
    @bookmarkCount = Bookmark.where(user_id: self.id).count
  end

  def user_dashboard_info 
    User.select("id", "first_name", "last_name", "twtter", "image_file_name", "admin").where(id: self.id)
  end
end
