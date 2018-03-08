class Post < ApplicationRecord
  belongs_to :user
  has_one :postlike, :dependent => :delete
  has_many :users, :through => :bookmarks
  has_many :users, :through => :postlikes
  # after_create :create_postlike

  has_attached_file :image, styles: { med: "100x100", large: "200x200" }, :path =>"app/assets/images/post_pictures/:filename", :url => "/assets/post_pictures/:filename"
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  def post_pic_url
    image.url(:original)
  end

  def author_info
    @author = User.find_by(id: self.user_id)
  end

  def like_info
    @likes = Postlike.find_by(post_id: self.id)
  end

  def as_json(options={})
    super(:include => {:user => {:only => [:twtter], :methods => [:headshot_url, :full_name]}, :postlike => {:only => [:hearts, :hands, :likes]}}
  )
  end

  # def create_postlike 
  #   likes = Postlike.new(post_id: self.id)
  #   likes.save 
  # end
end
