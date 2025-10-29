	interface IMenuNode {
    readonly children?: readonly IMenuNode[];
    readonly open?: boolean;
    readonly icon?: string;
    readonly badge?: string;
    readonly label: string;
}
