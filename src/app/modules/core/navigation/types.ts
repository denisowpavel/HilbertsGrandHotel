	interface IMenuNode {
    readonly children?: readonly IMenuNode[];
    readonly open?: boolean;
    readonly icon?: string;
    readonly badge?: number;
    readonly label: string;
}
