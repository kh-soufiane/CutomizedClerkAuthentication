import { Spinner } from "../spinner/spinner";

type LoaderProps = {
  loading: boolean;
  children: React.ReactNode;
};

export const Loader = ({ loading, children }: LoaderProps) => {
  return loading ? (
    <div className="w-full py-5 flex justify-center">
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default Loader;
