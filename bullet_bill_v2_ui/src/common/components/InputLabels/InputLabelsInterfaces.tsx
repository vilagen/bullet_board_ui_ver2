export interface RowsList {
  id:string,
  label: string,
  defaultValue: string,
  value: string,
  setStateValue: React.Dispatch<React.SetStateAction<string>>,
  required: boolean,
  hideText?: boolean,
  setHideText?: React.Dispatch<React.SetStateAction<boolean>>
}