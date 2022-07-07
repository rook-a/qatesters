import { adaptLabelToClient } from '../../../../utils/utils';

import styles from './label.module.scss';

interface LabelProps {
  status: string;
}

function Label({ status }: LabelProps): JSX.Element {
  return <span className={`${styles.label} ${styles[`label-${status}`]}`}>{adaptLabelToClient(status)}</span>;
}

export default Label;
