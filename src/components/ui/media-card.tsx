import Image from 'next/image';

interface MediaCardProps {
  item: {
    imageUrl: string;
    imageName: string;
    isNameCenter?: boolean;
    leftImageText?: string;
    rightImageText?: string;
  };
}

export const MediaCard = ({ item }: MediaCardProps) => {
  return (
    <div className={`flex gap-2 ${item.leftImageText ? 'pl-[20rem]' : ''} `}>
      {item.leftImageText && <p className="w-[15rem] text-right">{item.leftImageText}</p>}
      <div>
        <Image src={item.imageUrl} alt={item.imageName} width={500} height={500} loading="lazy" />
        <p className={item.isNameCenter ? 'text-center' : ''}>{item.imageName}</p>
      </div>
      {item.rightImageText && <p className="w-[15rem]">{item.rightImageText}</p>}
    </div>
  );
};
