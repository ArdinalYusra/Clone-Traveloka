import { IconType } from "react-icons/lib"

export type CategoryListProps = {
    label: string,
    icon?: IconType,
}

export interface CategoryProps extends CategoryListProps {
    path: string,
}