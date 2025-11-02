interface IMenuNode {
  readonly path: string;
  readonly label: string;
  readonly children?: readonly IMenuNode[];
  readonly open?: boolean;
  readonly icon?: string;
  readonly badge?: number;
}
