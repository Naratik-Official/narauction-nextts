import { useRouter } from 'next/router';

export default (url, scroll) => function Redirect() {
  const router = useRouter();

  router.replace(url, undefined, {
    scroll: scroll ?? false,
  });

  return null;
};
