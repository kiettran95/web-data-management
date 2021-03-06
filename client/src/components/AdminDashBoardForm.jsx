import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const AdminDashBoardForm = ({
  name
}) => (
  <Card className="container">
    <form>
      <h2 className="card-heading">Welcome Admin</h2>


      <div className="button-line">
        <RaisedButton type="view_visitors_list" label="View Visitors List" primary 
                      href="http://localhost:3000/dashboard/admin/a/ViewVisitorsList"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_owners_list" label="View Owners List" primary 
                      href="http://localhost:3000/dashboard/admin/a/viewownerslist"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_confirmed_properties" label="View Confirmed Properties" primary 
                      href="http://localhost:3000/dashboard/admin/a/ViewConfirmedProperties"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_unconfirmed_properties" label="View Unconfirmed Properties" primary 
                      href="http://localhost:3000/dashboard/admin/a/ViewUnconfirmedProperties"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_approved_animals_and_crops" label="View Approved Animals and Crops" primary 
                      href="./ViewApprovedAnimalsandCrops"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_pending_animals_and_crops" label="View Pending Animals and Crops" primary 
                      href="./ViewPendingAnimalsandCrops"/>
      </div>

      <div className="button-line">
        <RaisedButton type="logout" label="Logout" primary         
                      href="../login"/>
      </div>

    </form>
  </Card>
);

AdminDashBoardForm.propTypes = {
  name: PropTypes.string.isRequired
};

export default AdminDashBoardForm;
