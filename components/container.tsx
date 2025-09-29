import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return(
        <div className="max-w-[1200px] w-full m-auto px-3">
            {children}
        </div>
    )
}

export default Container;