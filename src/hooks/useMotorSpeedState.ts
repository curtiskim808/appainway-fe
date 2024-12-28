import { useRecoilState } from "recoil";
import { motorSpeedStateAtom } from "../recoil/atoms";

function useBatteryChargingState() {
  const [motorSpeedState, setMotorSpeedState] =
    useRecoilState(motorSpeedStateAtom);

  const updateMotorSpeedStateState = (value: {
    motorSpeed: number;
    inUsed: boolean;
  }) => {
    setMotorSpeedState(value);
  };
  return { motorSpeedState, updateMotorSpeedStateState };
}

export default useBatteryChargingState;
