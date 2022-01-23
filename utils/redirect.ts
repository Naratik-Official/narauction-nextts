import { useRouter } from "next/router";
import { useEffect } from "react";

export default (url: string, scroll?: boolean) =>
  function Redirect() {
    const router = useRouter();

    useEffect(() => {
      router.replace(url, undefined, {
        scroll: scroll ?? false,
      });
    }, []);

    return null;
  };
