class Postlike < ApplicationRecord
  belongs_to :user 
  belongs_to :post

  validates_uniqueness_of :user_id, :scope => :post_id

  def count_hearts
    Postlike.where(post_id: self.post_id).sum(:hearts)
    # Postlike.select(:hearts).where(post_id: self.post_id).sum
  end

  def count_stars 
    Postlike.where(post_id: self.post_id).sum(:likes)
    # Postlike.select(:likes).where(post_id: self.post_id).sum 
  end

  def count_hands 
    Postlike.where(post_id: self.post_id).sum(:hands)
    # Postlike.select(:hands).where(post_id: self.post_id).sum 
  end
end
