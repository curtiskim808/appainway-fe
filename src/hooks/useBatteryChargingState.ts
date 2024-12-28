import { useRecoilState } from "recoil";
import { batteryChargingStateAtom } from "../recoil/atoms";

function useBatteryChargingState() {
  const [isCharging, setIsCharging] = useRecoilState(batteryChargingStateAtom);

  const updateBatteryChargingState = (value: boolean) => {
    setIsCharging(value);
  };
  return { isCharging, updateBatteryChargingState };
}

export default useBatteryChargingState;
