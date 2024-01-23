import type { Billboard as BillProps } from '@/types';

interface BillboardProps {
  data: BillProps;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover border shadow-xl">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="text-primary font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
          <p className='text-primary'>lorem25</p>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
