import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { TitleDashboardComponent } from './components/titles/title-dashboard/title-dashboard.component';
import { TitleViewComponent } from './components/titles/title-view/title-view.component';
import { TitlesListComponent } from './components/titles/titles-list/titles-list.component';
import { AuthGuard } from './guard/auth.guard';
import { AddTitleComponent } from './admin-components/add-title/add-title.component';
import { AdminListComponent } from './admin-components/admin-list/admin-list.component';
import { AdminViewComponent } from './admin-components/admin-view/admin-view.component';
import { UpdateTitleComponent } from './admin-components/update-title/update-title.component';
import { AuthorsListComponent } from './components/authors/authors-list/authors-list.component';
import { AuthorsByFnameComponent } from './components/authors/authors-by-fname/authors-by-fname.component';
import { EmployeeFirstnameComponent } from './components/employees/employee-firstname/employee-firstname.component';
import { EmployeeHiredateComponent } from './components/employees/employee-hiredate/employee-hiredate.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeePubidComponent } from './components/employees/employee-pubid/employee-pubid.component';
import { EmployeeLastnameComponent } from './components/employees/employee-lastname/employee-lastname.component';
import { EmployeeViewIdComponent } from './components/employees/employee-view-id/employee-view-id.component';
import { PublishersListComponent } from './components/publishers/publishers-list/publishers-list.component';
import { PublishesIdComponent } from './components/publishers/publishes-id/publishes-id.component';
import { PublishesNameComponent } from './components/publishers/publishes-name/publishes-name.component';
import { PublishesCityComponent } from './components/publishers/publishes-city/publishes-city.component';
import { PublishesCountryComponent } from './components/publishers/publishes-country/publishes-country.component';
import { PublishesStateComponent } from './components/publishers/publishes-state/publishes-state.component';
import { PubinfoListComponent } from './components/publishers/pubinfo-list/pubinfo-list.component';
import { JobIdComponent } from './components/job/job-id/job-id.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { JobMaxlevelComponent } from './components/job/job-maxlevel/job-maxlevel.component';
import { JobMinlevelComponent } from './components/job/job-minlevel/job-minlevel.component';
import { StoreByIdComponent } from './components/stores/store-by-id/store-by-id.component';
import { StoreByNameComponent } from './components/stores/store-by-name/store-by-name.component';
import { StoresListComponent } from './components/stores/stores-list/stores-list.component';
import { StoreByZipComponent } from './components/stores/store-by-zip/store-by-zip.component';
import { StoreByCityComponent } from './components/stores/store-by-city/store-by-city.component';
import { SalesByDateComponent } from './components/sales/sales-by-date/sales-by-date.component';
import { SalesByIdComponent } from './components/sales/sales-by-id/sales-by-id.component';
import { SalesByStoreidComponent } from './components/sales/sales-by-storeid/sales-by-storeid.component';
import { SalesByTitleidComponent } from './components/sales/sales-by-titleid/sales-by-titleid.component';
import { SalesListComponent } from './components/sales/sales-list/sales-list.component';
import { AddEmployeeComponent } from './admin-components/add-employee/add-employee.component';
import { PublisherUpdateComponent } from './admin-components/publisher-update/publisher-update.component';
import { PublisherAddComponent } from './admin-components/publisher-add/publisher-add.component';
import { AdminPublisherListComponent } from './admin-components/admin-publisher-list/admin-publisher-list.component';
import { AdminPubinfoListComponent } from './admin-components/admin-pubinfo-list/admin-pubinfo-list.component';
import { AdminPubinfoUpdateComponent } from './admin-components/admin-pubinfo-update/admin-pubinfo-update.component';
import { AddSalesComponent } from './admin-components/add-sales/add-sales.component';
import { AddAuthorComponent } from './admin-components/add-author/add-author.component';
import { AddStoreComponent } from './admin-components/add-store/add-store.component';
import { AddJobComponent } from './admin-components/add-job/add-job.component';

const routes: Routes = [
  {
    path: 'jobsadd',
    component: AddJobComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'authorsadd',
    component: AddAuthorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'storesadd',
    component: AddStoreComponent,
    canActivate: [AuthGuard],
  },
  { path: 'addsale', component: AddSalesComponent, canActivate: [AuthGuard] },
  {
    path: 'adminpubinfolist',
    component: AdminPubinfoListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pubinfo-update',
    component: AdminPubinfoUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publisherupdate',
    component: PublisherUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publisheradd',
    component: PublisherAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publisherlistadmin',
    component: AdminPublisherListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'sales', component: SalesListComponent, canActivate: [AuthGuard] },
  {
    path: 'sales-by-orderNumber',
    component: SalesByIdComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sales-by-storeid',
    component: SalesByStoreidComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sales-by-titleid',
    component: SalesByTitleidComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sales-orderDate',
    component: SalesByDateComponent,
    canActivate: [AuthGuard],
  },
  { path: 'stores', component: StoresListComponent, canActivate: [AuthGuard] },
  {
    path: 'stores-by-id',
    component: StoreByIdComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stores-by-zip',
    component: StoreByZipComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stores-by-city',
    component: StoreByCityComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stores-by-name',
    component: StoreByNameComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publishers',
    component: PublishersListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publisherby-id',
    component: PublishesIdComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publisherby-name',
    component: PublishesNameComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publisherby-city',
    component: PublishesCityComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publisherby-country',
    component: PublishesCountryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publisherby-state',
    component: PublishesStateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pub-info',
    component: PubinfoListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'jobs', component: JobListComponent, canActivate: [AuthGuard] },
  { path: 'jobid', component: JobIdComponent, canActivate: [AuthGuard] },
  {
    path: 'jobminlevel',
    component: JobMinlevelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'jobmaxlevel',
    component: JobMaxlevelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employeeview-id',
    component: EmployeeViewIdComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employee-firstname',
    component: EmployeeFirstnameComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employee-pubid',
    component: EmployeePubidComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employee-lastname',
    component: EmployeeLastnameComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employee-hiredate',
    component: EmployeeHiredateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'getinfo',
    component: AuthorsByFnameComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adminList',
    component: AdminListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adminView/:titleName',
    component: AdminViewComponent,
  },
  { path: 'addTitle', component: AddTitleComponent, canActivate: [AuthGuard] },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'updateTitle/:titleName',
    component: UpdateTitleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'authors',
    component: AuthorsListComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: LandingPageComponent },
  {
    path: 'title-dashboard',
    component: TitleDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'title-view/:titleName',
        component: TitleViewComponent,
        canActivate: [AuthGuard],
      },
      { path: '', component: TitlesListComponent },
    ],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
