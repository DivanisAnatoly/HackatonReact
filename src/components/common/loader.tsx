import ClockLoader from "react-spinners/ClockLoader";

export function Loader() {
    const override = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);`;

    return <>
        <ClockLoader color={"blue"} loading={true} size={13} css={override} />
    </>
}