import { useRouter } from "next/router";

export default (url: string, scroll?: boolean) =>
  function Redirect() {
    const router = useRouter();

    router.replace(url, undefined, {
      scroll: scroll ?? false,
    });

    return null;
  };
