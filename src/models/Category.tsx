import React, {ReactNode} from "react";

export interface Routes {
    path: string;
    icon?: ReactNode;
    primaryText?: string;
    exact?: boolean;
    main?: ReactNode;
}
