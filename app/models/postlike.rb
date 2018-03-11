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

  def reaction(type)
    if self.persisted?
      if type == "hearts"
        self.hearts > 0 ? self.hearts = 0 : self.hearts = 1
        self.save
      elsif type == "hands"
        self.hands > 0 ? self.hands = 0 : self.hands = 1
        self.save
      elsif type == "likes"
        self.likes > 0 ? self.likes = 0 : self.likes = 1
        self.save
      end
    end
  end
end
