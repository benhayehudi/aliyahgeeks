class Postlike < ApplicationRecord
  belongs_to :user 
  belongs_to :post

  validates_uniqueness_of :user_id, :scope => :post_id

  def count_hearts
    Postlike.select(:hearts).where(post_id: self.id).count
  end

  def count_stars 
    Postlike.select(:likes).where(post_id: self.id).count 
  end

  def count_hands 
    Postlike.select(:hands).where(post_id: self.id).count 
  end
end
