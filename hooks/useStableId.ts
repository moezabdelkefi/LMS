import { useId, useMemo } from "react";

let globalId = 0;

function useStableId() {
  const reactId = useId();
  const stableId = useMemo(() => {
    globalId += 1;
    return `stable-id-${globalId}`;
  }, []);
  return stableId || reactId;
}

export default useStableId;