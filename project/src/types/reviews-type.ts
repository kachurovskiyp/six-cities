export type Review = {
  avatar: string;
  name: string;
  rating: number;
  review: string;
};

export type Reviews = Review[];

export type ReviewsProps = {
  reviews: Reviews;
};

export type ReviewProps = {
  review: Review;
}


