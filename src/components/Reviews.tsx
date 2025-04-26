
import { Card, CardContent } from "@/components/ui/card";

export function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      review: "Exceptional wound care service. The staff is professional and caring. They helped me recover quickly from a complicated injury.",
      rating: 5
    },
    {
      name: "Michael Peters",
      review: "Very professional clinic with modern facilities. The wound care specialists are knowledgeable and attentive.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      review: "Outstanding service and follow-up care. The team is dedicated to ensuring proper healing. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Patients Say</h2>
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory">
          {reviews.map((review, index) => (
            <Card key={index} className="border-none shadow-lg flex-shrink-0 w-[85vw] md:w-auto snap-center mb-4">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.review}</p>
                <p className="font-semibold text-brand">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
