import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const featuredProducts = await getProducts({ isFeatured: true });
  const billboardData = await getBillboard("bbd2767a-7396-4abf-99b7-d6aebed0f437");

  const URL=`${process.env.NEXT_PUBLIC_API_URL}`;
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboardData} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={featuredProducts} />
        </div>
      </div>

      <h1 className="text-2xl text-center text-primary">
       {URL}
      </h1>
    </Container>
  );
};

export default HomePage;