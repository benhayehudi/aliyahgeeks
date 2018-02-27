class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  has_attached_file :image, styles: { icon: "32x32", small: "64x64", med: "100x100", large: "200x200" }, :path =>"app/assets/images/headshots/:filename", :url => "/assets/headshots/:filename"
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  def headshot_url
    image.url(:original)
  end
end
