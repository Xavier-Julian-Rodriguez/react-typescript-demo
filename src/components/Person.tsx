// example of moving the PersonProps type object to a seperate .ts file and importing
type PersonProps = {
    name: {
        first: string
        last: string
    }
}
export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}