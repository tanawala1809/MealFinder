export default function HeaderText(props) {
    return (
        <>
            {
                props.initial ? (
                    <>
                        <h2>{`Search Results for '${props.keyword}'`}</h2>
                    </>
                ) : (
                    <>
                    </>
                )
            }
        </>
    );
}