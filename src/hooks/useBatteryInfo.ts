/**
 * Custom hook to manage battery information state using Recoil.
 * Provides functions to get and set battery information.
 */
import { useRecoilValue, useSetRecoilState } from "recoil";
import { batteryInfoValueSelector } from "../recoil/selectors";
import { BatteryInfoType } from "../types/dashboard";
import { batteryInfoState } from "../recoil/atoms";

function useBatteryInfo() {
  const setBatteryInfo = useSetRecoilState(batteryInfoState);
  const getBatteryInfoValue = useRecoilValue(batteryInfoValueSelector);

  const setBatteryInfoState = (
    id: number,
    type: BatteryInfoType,
    value: number,
    unit: string
  ) => {
    setBatteryInfo((prev) =>
      prev.map((batteryInfo) =>
        batteryInfo.type === type && batteryInfo.id === id
          ? {
              ...batteryInfo,
              value,
              unit,
              updatedAt: new Date().toISOString(),
            }
          : batteryInfo
      )
    );
  };
  return { getBatteryInfoValue, setBatteryInfoState };
}

export default useBatteryInfo;
