import { useRecoilState } from "recoil";
import { indicatorsAtom } from "../recoil/atoms";

function useIndicators() {
  const [indicators, setIndicators] = useRecoilState(indicatorsAtom);

  const updateIndicator = (key: string, value: boolean) => {
    setIndicators((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return { indicators, updateIndicator };
}

export default useIndicators;
