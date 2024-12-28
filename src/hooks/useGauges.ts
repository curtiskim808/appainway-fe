import { useRecoilState } from "recoil";
import { gaugesAtom } from "../recoil/atoms";

function useGauges() {
  const [gauges, setGauges] = useRecoilState(gaugesAtom);

  const updateGauge = (key: string, value: number) => {
    setGauges((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return { gauges, updateGauge };
}

export default useGauges;
