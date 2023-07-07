import useRouter from '../hooks/useRouter';

interface Props {
  to: string;
  children: React.ReactNode;
}

export default function Link({ to, children }: Props) {
  const { push } = useRouter();

  return <a onClick={() => push(to)}>{children}</a>;
}