import Dropdown from 'react-bootstrap/Dropdown';

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <a>Location</a>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <li>
        <Dropdown.Item href="#/action-1">CRC</Dropdown.Item>
        </li>
        <li>
        <Dropdown.Item href="#/action-2">Auditorium</Dropdown.Item>
        </li>
        <li>
        <Dropdown.Item href="#/action-3">Others</Dropdown.Item>
        </li>
       
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;