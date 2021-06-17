export default function LevelWarning({warnings}) {
    const listItems = warnings.map((w) => <li key={w}>{w}</li>);

    return (
        <div>
            {listItems}
        </div>
    );
}