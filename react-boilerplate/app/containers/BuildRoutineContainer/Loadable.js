/**
 *
 * Asynchronously loads the component for BuildRoutineContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
