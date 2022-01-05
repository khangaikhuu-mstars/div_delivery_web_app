import Breadcrumb from 'react-bootstrap/Breadcrumb'
import BreadcrumbItem from 'react-bootstrap/esm/BreadcrumbItem';
import '../css/breadCrumb.css'

function BreadcrumbComponent(props) {
  return (
    <div className="mt-5">
        <Breadcrumb>
          <Breadcrumb.Item className="text-orange" > Хайлт </Breadcrumb.Item>
          <BreadcrumbItem> <img src="/arrowRight.svg" alt="" /></BreadcrumbItem>
          <Breadcrumb.Item className="text-dark">
          {props.value.toUpperCase()}
          </Breadcrumb.Item>
        </Breadcrumb>
    </div>

  )
}
export default BreadcrumbComponent;