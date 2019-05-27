import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function MessageDialog(title, message, category) {
  MySwal.fire({
    onOpen: () => {
      MySwal.clickConfirm();
    }
  }).then(() => {
    return MySwal.fire(title, message, category);
  });
}
