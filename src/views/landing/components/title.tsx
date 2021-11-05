interface IProps {
  text: string;
}

const Title = ({ text }: IProps) => {
  return <p className="text-3xl font-bold mt-6">{text}</p>;
};

export default Title;
