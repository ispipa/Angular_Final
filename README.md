# ToTheList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
#   A n g u l a r _ F i n a l 
 
 ```mermaid

classDiagram
class ArbomapAuthModule{
            
            
        }
class AppModule{
            
            
        }
class ArbomapConfiguratorModule{
            
            
        }
class AuthModule{
            
            
        }
class AuthService{
            +logger: any*
+usersService: UserService
+jwtService: JwtService
+configService: ConfigService
+airflowService: AirflowService
            +validateUser() Promise~any~
+validateUserByName() Promise~any~
+login() Promise~{ access_token: any; }~
+changePassword() Promise~any~
+recoverCredentials() Promise~{ status: string; data: {}; }~
+sendRecoveryCredentialsMail() Promise~{ status: string; data: any; }~
+sendEmail() Promise~{ status: string; data: any; }~
+esri_login() Promise~any~
        }
class AuthController{
            +authService: AuthService
            +login() Promise~{ access_token: any; }~
+esri_login() Promise~any~
+changePassword() Promise~any~
+verify() Promise~boolean~
+recovery_email() Promise~{ status: string; data: any; }~
+recovery_credentials() Promise~{ status: string; data: {}; }~
+sendEmail() Promise~{ status: string; data: any; }~
        }
class CreateUserDto{
            +username: string
+name: string
+surname: string
+profilePicture: string
+email: string
+phone?: string
+company: string
+companyType: CompanyType
+companyJob?: string
+tecnigral_role: Role
+team_role: string
+isAdmin?: boolean
+projectsId: string[]
+projectName: string
+lotsId: string[]
+modules?: Module[]
+password: string
            
        }
class CredentialDto{
            +username: string
+password: string
            
        }
class SendMailDto{
            +subject: string
+mailTo: string[]
+body: string
            
        }
class UpdateUserDto{
            
            
        }
class CompanyType {
        <<enumeration>>
        administration
team
      }
class Module {
        <<enumeration>>
        Inventory
Incidences
Inspection
Configurator
Conservation
Quality
Reporting
WorkArea
      }
class UserController{
            +userService: UserService
            +getProfilePicture() any
+setProfilePicture() any
+create() Promise~User~
+updateRoles() Promise~{ status: string; data: boolean; }~
+checkUsername() Promise~{ status: string; data: any; }~
+findCompany() Promise~User~
+findLot() Promise~User~
+findByLot() Promise~User[]~
+findOneAndPopulate() Promise~User~
+findAllInProject() Promise~User[]~
+findOne() Promise~User~
+findAll() Promise~any~
+remove() Promise~any~
+update() Promise~any~
+updateUser() Promise~any~
        }
class CorrectiveMaintenanceController{
            +correctiveMaintenanceService: CorrectiveMaintenanceService*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+updateReport() Promise~{ status: string; data: any; }~
        }
class CorrectiveMaintenanceModule{
            
            
        }
class CorrectiveMaintenanceRepository{
            +logger: any*
+correctiveMaintenanceModel: Model~CorrectiveMaintenance~
+connection: Connection
+userConnection: Connection
+configService: ConfigService
            +createMultitenant() Promise~any~
+findMultitenantWithPopulate() Promise~any~
+findOneMultitenantWithPopulate() Promise~any~
+deleteMultitenant() Promise~any~
+findOneAndUpdateMultitenant() Promise~any~
        }
AbstractRepository~TDocument~<|--CorrectiveMaintenanceRepository
class CorrectiveMaintenanceService{
            +logger: Logger*
+correctiveMaintenanceRepository: CorrectiveMaintenanceRepository*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
        }
class DayBrigadeController{
            +dayBrigadeService: DayBrigadeService*
            +find() Promise~{ status: string; data: JobsAssigned[]; }~
        }
class DayBrigadeModule{
            
            
        }
class DayBrigadeService{
            +connection: Connection
+brigadeConnection: Connection
            +find() Promise~{ status: string; data: JobsAssigned[]; }~
        }
class JobsAssigned {
            <<interface>>
            +brigadeId: string
+jobs: Job[]
            
        }
class Format {
        <<enumeration>>
        Csv
Excel
Shapefile
Geojson
      }
class JobType {
        <<enumeration>>
        inventory
inspection
quality
maintenance
      }
class NotificationType {
        <<enumeration>>
        General
Inventory
Incidences
Inspection
Configurator
Conservation
Part
Quality
Reporting
WorkArea
      }
class NotificationPriority {
        <<enumeration>>
        High
Low
      }
class NotificationState {
        <<enumeration>>
        Open
Read
Closed
      }
class PartType {
        <<enumeration>>
        diary
weekly
      }
class ExportController{
            +exportService: ExportService
+airflowService: AirflowService
            +getToken() Promise~any~
+export() Promise~{ status: string; data: { urlDownload: string; response: any; }; }~
+deleteItem() Promise~any~
        }
class ExportService{
            +configService: ConfigService
+airflowService: AirflowService
            +getToken() Promise~any~
+export() Promise~{ status: string; data: { urlDownload: string; response: any; }; }~
+getFileTypeDescription() "CSV" | "Shapefile" | "GeoJson" | "excel"
        }
class ExportConfiguration {
            <<interface>>
            +itemId: string
+layerId: number
+format: Format
+whereClausule?: string
+name: string
            
        }
class ExpressionQueryController{
            +expressionQueryService: ExpressionQueryService*
            +create() any
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+updateReport() Promise~{ status: string; data: any; }~
        }
class ExpressionQueryModule{
            
            
        }
class ExpressionQueryRepository{
            +logger: any*
+queriesModel: Model~ExpressionQuery~
+connection: Connection
+configService: ConfigService
            +createMultitenant() Promise~any~
+findMultitenantWithPopulate() Promise~any~
+findOneMultitenantWithPopulate() Promise~any~
+deleteMultitenant() Promise~any~
+findOneAndUpdateMultitenant() Promise~any~
        }
AbstractRepository~TDocument~<|--ExpressionQueryRepository
class ExpressionQueryService{
            +logger: Logger*
+expressionQueryRepository: ExpressionQueryRepository*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
        }
class IncidenceController{
            +incidenceService: IncidenceService*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+updateIncidence() Promise~{ status: string; data: any; }~
+query() Promise~{ status: string; data: any; }~
+queryIds() Promise~{ status: string; data: unknown[]; }~
        }
class IncidenceModule{
            
            
        }
class IncidenceRepository{
            +logger: any*
+incidenceModel: Model~Incidence~
+connection: Connection
+userConnection: Connection
+configService: ConfigService
            +createMultitenant() Promise~any~
+findMultitenant() Promise~any~
+findMultitenantWithPopulate() Promise~any~
+findOneMultitenantWithPopulate() Promise~any~
+deleteMultitenant() Promise~any~
+findOneAndUpdateMultitenant() Promise~any~
        }
AbstractRepository~TDocument~<|--IncidenceRepository
class IncidenceService{
            +incidenceRepository: IncidenceRepository*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+query() Promise~{ status: string; data: any; }~
+queryIds() Promise~{ status: string; data: unknown[]; }~
        }
class Priority {
            <<interface>>
            +value: string
+color: string
            
        }
class Action {
            <<interface>>
            +name: string
+color: string
+locations: { [lang: string]: string; }
            
        }
class CorrectiveMaintenance {
            <<interface>>
            +_id: string
+lotId: string
+incidenceId: string
+municipality: string
+address?: string
+client?: string
+manufacturer?: string
+updatedAt: Date
+maintenanceComment: string
+usersReceptors: string[]
+BrigadeReceptor: Brigade[]
+equipmentIdentification?: EquipmentIdentification[]
+comments?: Comment[]
+isSigned: boolean
+signedBy: string[]
            
        }
class EquipmentIdentification {
            <<interface>>
            +pieces: string
+orderDate: Date
+arrivalDate: Date
+dateRepair: Date
            
        }
class Expression{
            +field: Partial~WyredField~
+operator: string
+clause: Clause
+expression?: string
+module: Module
+layer: Layer
            
        }
class Clause {
            <<interface>>
            +value: string
+i18nPrefix: string
+label: string
            
        }
class ExpressionQuery {
            <<interface>>
            +name: string
+createdAt: Date
+expressionList: Expression[]
+module: Module
+fields: string[]
+layer: Layer
+lotId: string
+projectId: string
            
        }
class Job {
            <<interface>>
            +_id?: string
+type?: JobType
+creator: User
+createdAt: Date
+customId?: string
+startTime: Date
+endtime: Date
+state: State
+statesLog: State[]
+lastUpdated: { updatedAt: Date; updatedBy: User; }
+comments: Comment[]
+origin: Origin
+actions: Action[]
+priority: Priority
+description: string
+manualElements?: ManualElement[]
+pickedElements?: any[]
+zone?: string
+files?: string[]
+performance?: number
+estimatedTime?: number
+otId?: string
+latitude?: number
+longitude?: number
+incidenceId?: string
            
        }
class ManualElement {
            <<interface>>
            +units: number
+element: string
+specie: string
+zone: string
            
        }
class Notification {
            <<interface>>
            +id?: string
+type: NotificationType
+state: NotificationState
+priority: NotificationPriority
+sender: User
+receptors: User[]
+createdAt: Date
+comments: { user: Partial~User~; text: string; }[]
+body: { content: string; data: any; }
+ttl?: Date
            
        }
class Origin {
            <<interface>>
            +value: string
+color: string
            
        }
class State{
            +value: string
+color: string
+locations?: any
+index?: number
            
        }
class Part {
            <<interface>>
            +_id?: string
+tenantId: string
+customId?: string
+type: { value: PartType; color: string; }
+jobs: Job[]
+state: State
+brigade: Brigade
+creator: User
+createdAt: Date
+startTime: Date
+endTime?: Date
+isSigned: boolean
+signedBy: User[]
            
        }
class User {
            <<interface>>
            +_id?: string
+username: string
+name: string
+surname: string
+profilePicture: string
+email: string
+phone?: string
+company: string
+companyType: "administration" | "team"
+companyJob?: string
+tecnigral_role: Role
+team_role: string
+isAdmin?: boolean
+projectIds: string[]
+lotsIds: string[]
+modules?: Module[]
            
        }
class JobsController{
            +jobsService: JobsService*
            +create() Promise~{ status: string; data: any; }~
+allUnassigned() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findAllByType() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+removeBulk() Promise~{ status: string; data: any; }~
+updateJob() Promise~{ status: string; data: any; }~
+query() Promise~{ status: string; data: any; }~
+queryIds() Promise~{ status: string; data: unknown[]; }~
        }
class JobsModule{
            
            
        }
class JobsRepository{
            +logger: any*
+jobsModel: Model~Job~
+connection: Connection
+configService: ConfigService
            +createMultitenant() Promise~any~
+insertManyMultitenant() Promise~any~
+findMultitenantWithPopulate() Promise~any~
+findOneMultitenantWithPopulate() Promise~any~
+deleteMultitenant() Promise~any~
+deleteManyMultitenant() Promise~any~
+findOneAndUpdateMultitenant() Promise~any~
+updateManyMultitenant() Promise~any~
+bulkWriteMultitenant() Promise~any~
        }
AbstractRepository~TDocument~<|--JobsRepository
class JobsService{
            +jobsRepository: JobsRepository*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findAllByJobType() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+findAllUnassigned() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+removeBulk() Promise~{ status: string; data: any; }~
+query() Promise~{ status: string; data: any; }~
+queryIds() Promise~{ status: string; data: unknown[]; }~
        }
class NotificationsController{
            +notificationsService: NotificationsService*
            +create() Promise~boolean~
+addComment() Promise~any~
+removeComment() Promise~any~
+findMyNotis() Promise~any~
+findAll() Promise~any~
+findOne() Promise~Notification~
+update() Promise~any~
+removeNotification() Promise~boolean~
        }
class NotificationsModule{
            
            
        }
class NotificationRepository{
            +logger: any*
+notificationModel: Model~Notification~
+connection: Connection
+userConnection: Connection
+socketGateway: SocketGateway
            +getMyNotifications() Promise~any~
+broadcastNotification() Promise~void~
+clearNotificationBroadcasted() Promise~void~
+addComment() Promise~any~
+deleteComment() Promise~any~
+syncNotificationPool() Promise~void~
        }
AbstractRepository~TDocument~<|--NotificationRepository
class NotificationsService{
            +notificationsRepository: NotificationRepository
            +create() Promise~boolean~
+findAll() Promise~any~
+findOne() Promise~Notification~
+findMyNotifications() Promise~any~
+update() Promise~any~
+remove() Promise~boolean~
+addComment() Promise~any~
+deleteComment() Promise~any~
        }
class PartsController{
            +partsService: PartsService*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+removeBulk() Promise~{ status: string; data: any; }~
+updatePart() Promise~{ status: string; data: any; }~
        }
class PartsModule{
            
            
        }
class PartsRepository{
            +logger: any*
+partModel: Model~Parts~
+connection: Connection
+userConnection: Connection
+configService: ConfigService
            +createMultitenant() Promise~any~
+findMultitenantWithPopulate() Promise~any~
+findOneMultitenantWithPopulate() Promise~any~
+deleteMultitenant() Promise~any~
+deleteManyMultitenant() Promise~any~
+findOneAndUpdateMultitenant() Promise~any~
        }
AbstractRepository~TDocument~<|--PartsRepository
class PartsService{
            +logger: Logger*
+partsRepository: PartsRepository*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+removeBulk() Promise~{ status: string; data: any; }~
        }
class SocketGateway{
            +server: Server
+client: Socket
            +afterInit() void
+handleConnection() void
+handleDisconnect() void
+onEvent() { event: string; data: string; }
+sendServerMessage() void
        }
OnGatewayInit<|..SocketGateway
OnGatewayConnection<|..SocketGateway
OnGatewayDisconnect<|..SocketGateway
class SummaryController{
            +summaryService: SummaryService*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+updateReport() Promise~{ status: string; data: any; }~
        }
class SummaryModule{
            
            
        }
class SummaryRepository{
            +logger: any*
+summaryModel: Model~Summary~
+connection: Connection
+userConnection: Connection
+configService: ConfigService
            +createMultitenant() Promise~any~
+findMultitenantWithPopulate() Promise~any~
+findOneMultitenantWithPopulate() Promise~any~
+deleteMultitenant() Promise~any~
+findOneAndUpdateMultitenant() Promise~any~
        }
AbstractRepository~TDocument~<|--SummaryRepository
class SummaryService{
            +logger: Logger*
+summaryRepository: SummaryRepository*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
        }
class WorkOrdersController{
            +workOrderService: WorkOrdersService*
            +create() Promise~{ status: string; data: any; }~
+createWithJobs() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findAllWithPopulation() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+removeBulk() Promise~{ status: string; data: any; }~
+updateWorkOrders() Promise~{ status: string; data: any; }~
        }
class WorkOrdersModule{
            
            
        }
class WorkOrdersRepository{
            +logger: any*
+workOrdersModel: Model~WorkOrders~
+connection: Connection
+configService: ConfigService
            +createMultitenant() Promise~any~
+findMultitenantWithPopulate() Promise~any~
+findOneMultitenantWithPopulate() Promise~any~
+findJobsMultitenantWithPopulate() Promise~any~
+deleteMultitenant() Promise~any~
+deleteManyMultitenant() Promise~any~
+findOneAndUpdateMultitenant() Promise~any~
        }
AbstractRepository~TDocument~<|--WorkOrdersRepository
class WorkOrdersService{
            +logger: any*
+workOrdersRepository: WorkOrdersRepository*
+jobRepository: JobsRepository*
            +create() Promise~{ status: string; data: any; }~
+createWithJobs() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findAllWithPopulation() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+removeBulk() Promise~{ status: string; data: any; }~
        }
class ActionsCatalogueController{
            +actionsCatalogueService: ActionsCatalogueService*
            +create() Promise~{ status: string; data: Actions; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: Actions; } | { status: string; data: { tenantId: string; actions: any[]; }; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class ActionsCatalogueModule{
            
            
        }
class ActionsRepository{
            +logger: any*
+actionsModel: Model~Actions~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--ActionsRepository
class ActionsCatalogueService{
            +actionsRepository: ActionsRepository
            +create() Promise~{ status: string; data: Actions; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: Actions; } | { status: string; data: { tenantId: string; actions: any[]; }; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class AddDomainsController{
            +addDomainsService: AddDomainsService
            +mapCatalogueCollection() Promise~any~
        }
class AddDomainsModule{
            
            
        }
class AddDomainsService{
            +airflowService: AirflowService
            +mapCatalogueCollection() Promise~any~
+getCatalogueCollectionName() string
        }
class AirflowController{
            +airflowService: AirflowService
            +checkDagRun() Promise~any~
+runDag() Promise~any~
        }
class AirflowService{
            +configService: ConfigService
            +checkDagRun() Promise~any~
+runDag() Promise~any~
        }
class BrigadeController{
            +brigadeService: BrigadeService*
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findAllByTenantId() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class BrigadeModule{
            
            
        }
class BrigadeRepository{
            +logger: any*
+brigadeModel: Model~Brigade~
+employeeModel: Model~Employee~
+vehicleModel: Model~Vehicle~
+machineModel: Model~Machine~
+materialModel: Model~Material~
+connection: Connection*
            +createWithPopulate() Promise~any~
+updateOneWithPopulate() Promise~any~
+findOneWithPopulate() Promise~any~
+findAllByTenantIdWithPopulate() Promise~any~
        }
AbstractRepository~TDocument~<|--BrigadeRepository
class BrigadeService{
            +brigadeRepository: BrigadeRepository
+employeeRepository: EmployeeRepository
+machineRepository: MachineRepository
+vehicleRepository: VehicleRepository
            +create() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOneWithPopulate() Promise~{ status: string; data: any; }~
+findAllByTenantId() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class CatalogueController{
            +catalogueService: CatalogueService*
            +create() Promise~TecnigralCatalogue~
+findAll() Promise~any~
+getByQueryParams() Promise~any~
        }
class CatalogueModule{
            
            
        }
class CatalogueRepository{
            +logger: any*
+catalogueModel: Model~TecnigralCatalogue~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--CatalogueRepository
class CatalogueService{
            +catalogueRepository: CatalogueRepository*
            +create() Promise~TecnigralCatalogue~
+findAll() Promise~any~
+findByQuery() Promise~any~
        }
class CustomCatalogueController{
            +customCatalogueService: CustomCatalogueService*
            +create() Promise~{ status: string; data: CustomCatalogue; }~
+requestCatalogInsertion() Promise~{ status: string; data: any; }~
+findValue() Promise~{ status: string; data: string[]; }~
+findCatalogueByLotId() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class CustomCatalogueModule{
            
            
        }
class CustomCatalogueRepository{
            +logger: any*
+CustomCatalogueModel: Model~CustomCatalogue~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--CustomCatalogueRepository
class CustomCatalogueService{
            +customCatalogueRepository: CustomCatalogueRepository*
+airflowService: AirflowService*
+configService: ConfigService
            +findCatalogueByLotId() Promise~{ status: string; data: any; }~
+findValue() Promise~{ status: string; data: string[]; }~
+create() Promise~{ status: string; data: CustomCatalogue; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+requestCatalogInsertion() Promise~{ status: string; data: any; }~
+generateHTMLString() string
        }
class EmployeeController{
            +employeeService: EmployeeService*
            +create() Promise~{ status: string; data: Employee; }~
+createMany() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class EmployeeModule{
            
            
        }
class EmployeeRepository{
            +logger: any*
+employeeModel: Model~Employee~
+connection: Connection*
+userConnection: Connection*
            +findAllByTenantId() Promise~any~
+updateOneAndPopulate() Promise~any~
        }
AbstractRepository~TDocument~<|--EmployeeRepository
class EmployeeService{
            +employeeRepository: EmployeeRepository
            +create() Promise~{ status: string; data: Employee; }~
+createInsertBulk() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findAllByTenantId() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
        }
class AssetSheetType {
        <<enumeration>>
        inventory
inspection
quality
      }
class configType {
        <<enumeration>>
        standard
advanced
      }
class InventoryAsset {
        <<enumeration>>
        tree
palm
elementVegetable
massTree
surfaceNonVegetated
childrenArea
elementBiohealthy
managementUnit
furniture
irrigation
otherElements
      }
class inspectionAsset {
        <<enumeration>>
        f1Tree
f1Palm
f1qtra
vtaIsa
childrenArea
bio
      }
class QualityAsset {
        <<enumeration>>
        viaryTrees
greenZone
urban
cleanPoint
viary
childrenArea
irrigationNetwork
dirtyIndex
others
      }
class DagRunsIds {
        <<enumeration>>
        AddDomains
Append
CreateUser
DeployProject
ReconciliateProject
RemoveContentFromLayer
RemoveItem
RemoveUser
RequestCatalogInsertion
SendEmail
UpdateInventorySheets
      }
class Geometry {
        <<enumeration>>
        point
polyline
polygon
      }
class Status {
        <<enumeration>>
        Config
Deploying
Deployed
      }
class ReasonAbsenteeism {
        <<enumeration>>
        medicalSickLeave
unionHours
vacation
absenteeism
      }
class StateItem {
        <<enumeration>>
        Incidences
Job
Scheduler
WorkOrder
Report
ElementSheet
InspectionSheet
Quality
      }
class GranadaCataloguePalmController{
            +granadaCataloguePalmService: GranadaCataloguePalmService*
            +findAll() Promise~any~
+getByQueryParams() Promise~any~
        }
class GranadaCataloguePalmModule{
            
            
        }
class GranadaCataloguePalmRepository{
            +logger: any*
+granadaCataloguePalmModel: Model~GranadaCataloguePalm~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--GranadaCataloguePalmRepository
class GranadaCataloguePalmService{
            +granadaCataloguePalmRepository: GranadaCataloguePalmRepository*
            +findAll() Promise~any~
+findByQuery() Promise~any~
        }
class GranadaCatalogueTreeController{
            +granadaCatalogueTreeService: GranadaCatalogueTreeService*
            +findAll() Promise~any~
+getByQueryParams() Promise~any~
        }
class GranadaCatalogueTreeModule{
            
            
        }
class GranadaCatalogueTreeRepository{
            +logger: any*
+granadaCatalogueTreeModel: Model~GranadaCatalogueTree~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--GranadaCatalogueTreeRepository
class GranadaCatalogueTreeService{
            +granadaCatalogueTreeRepository: GranadaCatalogueTreeRepository*
            +findAll() Promise~any~
+findByQuery() Promise~any~
        }
class GranadaPalmDomainsController{
            +granadaPalmDomainsService: GranadaPalmDomainsService*
            +findAll() Promise~{ status: string; data: any; }~
+getByDomainName() Promise~{ status: string; data: any; }~
        }
class GranadaPalmDomainsRepository{
            +logger: any*
+granadaPalmDomainsModel: Model~GranadaPalmDomains~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--GranadaPalmDomainsRepository
class GranadaPalmDomainsService{
            +granadaPalmDomainsRepository: GranadaPalmDomainsRepository*
            +findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
        }
class GranadaPalmDomainsModule{
            
            
        }
class GranadaTreeDomainsController{
            +granadaTreeDomainsService: GranadaTreeDomainsService*
            +findAll() Promise~{ status: string; data: any; }~
+getByDomainName() Promise~{ status: string; data: any; }~
        }
class GranadaTreeDomainsModule{
            
            
        }
class GranadaTreeDomainsRepository{
            +logger: any*
+granadaTreeDomainsModel: Model~GranadaTreeDomains~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--GranadaTreeDomainsRepository
class GranadaTreeDomainsService{
            +granadaTreeDomainsRepository: GranadaTreeDomainsRepository*
            +findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
        }
class ImportController{
            +importService: ImportService*
            +append() Promise~any~
        }
class ImportModule{
            
            
        }
class ImportService{
            +logger: any*
+airflowService: AirflowService
            +append() Promise~any~
        }
class InspectSheetsController{
            +inspectSheetService: InspectSheetsService*
            +create() Promise~InspectSheet~
+findAll() Promise~any~
+generateDefault() Promise~AssetSheetInspection[]~
        }
class InspectSheetModule{
            
            
        }
class InspectSheetsService{
            +inspectSheetRepository: InspectSheetRepository*
            +create() Promise~InspectSheet~
+findAll() Promise~any~
+generateDefaults() Promise~AssetSheetInspection[]~
        }
class InspectSheetRepository{
            +logger: any*
+inspectSheetModel: Model~InspectSheet~
+connection: Connection*
            +generateDefaults() Promise~AssetSheetInspection[]~
        }
AbstractRepository~TDocument~<|--InspectSheetRepository
class Absenteeism {
            <<interface>>
            +date: Date
+reason: ReasonAbsenteeism
            
        }
class AssetCategory {
            <<interface>>
            +name: string
+attributes: WyredField[]
            
        }
class AssetCategoryQA {
            <<interface>>
            +name: string
+attributes: WyredFieldQA[]
            
        }
class AssetSheetInspection {
            <<interface>>
            +asset: inspectionAsset
+configurationType: configType
+categories: AssetCategory[]
            
        }
class AssetSheetInventory {
            <<interface>>
            +asset: InventoryAsset
+configurationType: configType
+categories: AssetCategory[]
+reducedViewAttr: WyredField[]
            
        }
class AssetSheetQuality {
            <<interface>>
            +asset: QualityAsset
+iq: number
+iqFormula: Ecuation[]
+categories: AssetCategoryQA[]
            
        }
class Brigade {
            <<interface>>
            +name: string
+employees: Employee[]
+vehicles: Vehicle[]
+machines: Machine[]
            
        }
class Ecuation {
            <<interface>>
            +conditions: Condition[]
+operator: Operator
            
        }
class Condition {
            <<interface>>
            +type: ConditionType
+field1?: string
+innerOperator?: Operator
+field2?: string
+outterOperator: Operator
+number?: number
            
        }
class Operator {
        <<enumeration>>
        suma
resta
multiplicacion
division
      }
class ConditionType {
        <<enumeration>>
        standard
fieldVsNumber
number
      }
class Employee {
            <<interface>>
            +_id?: string
+name: string
+surname: string
+email: string
+phone: string
+job: string
+workplace: string
+role: string
+isAdmin?: boolean
            
        }
class Layer{
            +_id?: string
+name: string
+description: string
+geometry: Geometry
+url: string
+assetType: InventoryAsset | inspectionAsset | QualityAsset
+definitionExpression?: string
+esriID?: number
            
        }
class LayerGroup{
            +name: string
+layers: Layer[]
            
        }
class Lot {
            <<interface>>
            +_id?: string
+tenantId?: string
+title: string
+description?: string
+layerGroups: LayerGroup[]
+rolesConfig?: RoleGroup[]
+inventory_assetsSheets: AssetSheetInventory[]
+inspection_assetsSheets: AssetSheetInspection[]
+quality_assetsSheets: AssetSheetQuality[]
+states: { incidences: State[]; job: State[]; scheduler: State[]; workorder: State[]; report: State[]; elementSheet: State[]; inspectionSheet: State[]; quality: State[]; }
+timetables: any
+languages: any
+brigades: Brigade[]
+certifications: any
+performance: any
            
        }
class Machine {
            <<interface>>
            +machine_type: string
+brand: string
+model: string
+state: string
+observations?: string
            
        }
class Project {
            <<interface>>
            +_id?: string
+name: string
+contracts: string[]
+zonification: LayerGroup
+groups?: LayerGroup[]
+allowedInventorySheets: InventoryAsset[]
+lots?: string[]
+users?: string[]
+mapCenter?: { lat: number; long: number; }
+status: Status
            
        }
class RoleGroup {
            <<interface>>
            +name: string
+permits: { [module: string]: Permit; }
            
        }
class Permit {
            <<interface>>
            +visualization: boolean
+edition: boolean
+selfEdition: boolean
+dataEdition: boolean
            
        }
class State {
            <<interface>>
            +_id?: string
+value: string
+color: string
+locations: { [lang: string]: string; }
+constrains: WyredField[]
+message: string
+isDefault: boolean
+isStandard: boolean
            
        }
class Vehicle {
            <<interface>>
            +brand: string
+model: string
+license_plate: string
+year: string
+kilometers: string
+fuel_energy: string
            
        }
class WyredField {
            <<interface>>
            +name: string
+alias: string
+defaultValue: any
+editable: boolean
+nullable: boolean
+type: string
+visible: boolean
+isAlwaysIncluded?: boolean
+isStandard?: boolean
+isMandatoryField: boolean
+domain: string[]
+path?: string
            
        }
class WyredFieldQA {
            <<interface>>
            +coeficient: number
            
        }
WyredField<|..WyredFieldQA
class InventorySheetsController{
            +inventorySheetService: InventorySheetsService*
            +create() Promise~InventorySheet~
+addCategory() Promise~any~
+findAll() Promise~any~
+generateDefault() Promise~AssetSheetInventory[]~
+generateDefaultByAsset() Promise~AssetSheetInventory[]~
+findAsset() Promise~InventorySheet~
        }
class InventorySheetsModule{
            
            
        }
class InventorySheetsService{
            +inventorySheetRepository: InventorySheetRepository*
            +create() Promise~InventorySheet~
+findAll() Promise~any~
+findAsset() Promise~InventorySheet~
+generateDefaults() Promise~AssetSheetInventory[]~
+generateDefaultsByAsset() Promise~AssetSheetInventory[]~
+addCategory() Promise~any~
        }
class InventorySheetRepository{
            +logger: any*
+inventorySheetModel: Model~InventorySheet~
+connection: Connection*
            +generateDefaults() Promise~AssetSheetInventory[]~
+generateDefaultByAsset() Promise~AssetSheetInventory[]~
        }
AbstractRepository~TDocument~<|--InventorySheetRepository
class LotsController{
            +lotsService: LotsService*
            +create() Promise~{ status: string; data: Lot; }~
+addRoleGroup() Promise~{ status: string; data: any; }~
+updateInventorySheets() Promise~{ status: string; data: any; }~
+findPermit() Promise~any~
+findAll() Promise~{ status: string; data: any; }~
+findOneWithPopulate() Promise~{ status: string; data: Lot; }~
+findOne() Promise~{ status: string; data: Lot; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+removeRoleGroup() Promise~{ status: string; data: any; }~
        }
class LotsModule{
            
            
        }
class LotsRepository{
            +logger: any*
+lotsModel: Model~Lot~
+connection: Connection*
            +addRoleGroup() Promise~any~
+removeRoleGroup() Promise~any~
+findOneWithPopulate() Promise~Lot~
+findOneWithPopulateTenantName() Promise~Lot~
+findPermit() Promise~any~
        }
AbstractRepository~TDocument~<|--LotsRepository
class LotsService{
            +logger: Logger*
+lotsRepository: LotsRepository*
+projectRepository: ProjectRepository*
+configService: ConfigService
+airflowService: AirflowService
            +create() Promise~{ status: string; data: Lot; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: Lot; }~
+findOneAndPopulateTenant() Promise~{ status: string; data: Lot; }~
+remove() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+updateInventorySheets() Promise~{ status: string; data: any; }~
+findOneWithPopulate() Promise~{ status: string; data: Lot; }~
+findPermit() Promise~any~
+addGroupLayer() Promise~{ status: string; data: any; }~
+removeRoleGroup() Promise~{ status: string; data: any; }~
        }
class MachineController{
            +machineService: MachineService*
            +create() Promise~{ status: string; data: Machine; }~
+createMany() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class MachineModule{
            
            
        }
class MachineRepository{
            +logger: any*
+machineModel: Model~Machine~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--MachineRepository
class MachineService{
            +machineRepository: MachineRepository
            +create() Promise~{ status: string; data: Machine; }~
+BulkInsert() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findAllByTenantId() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
        }
class MaterialsController{
            +materialsService: MaterialsService*
            +create() Promise~{ status: string; data: Materials; }~
+createMany() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class MaterialsModule{
            
            
        }
class MaterialsRepository{
            +logger: any*
+materialsModel: Model~Materials~
+connection: Connection*
            +insertManyBulk() Promise~any~
        }
AbstractRepository~TDocument~<|--MaterialsRepository
class MaterialsService{
            +materialsRepository: MaterialsRepository
            +create() Promise~{ status: string; data: Materials; }~
+BulkInsert() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findAllByTenantId() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
        }
class ProjectController{
            +projectService: ProjectService*
            +create() Promise~any~
+findAll() Promise~{ status: string; data: any; }~
+findPopulate() Promise~{ status: string; data: any; }~
+findAllFlatten() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: Project; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+addUser() Promise~{ status: string; data: any; }~
+removeUser() Promise~{ status: string; data: any; }~
+addLot() Promise~{ status: string; data: any; }~
+removeLot() Promise~{ status: string; data: any; }~
+addInventorySheet() Promise~{ status: string; data: any; }~
+removeInventorySheet() Promise~{ status: string; data: any; }~
+deploy_project() Promise~any~
+sync_project() Promise~any~
        }
class ProjectModule{
            
            
        }
class ProjectRepository{
            +logger: any*
+projectModel: Model~Project~
+connection: Connection
+userConnection: Connection
            +addInventorySheet() Promise~any~
+removeInventorySheet() Promise~any~
+addUser() Promise~any~
+removeUser() Promise~any~
+addLot() Promise~any~
+removeLot() Promise~any~
+findWithPopulation() Promise~any~
        }
AbstractRepository~TDocument~<|--ProjectRepository
class ProjectService{
            +logger: any*
+repository: ProjectRepository*
+configService: ConfigService
+airflowService: AirflowService
            +create() Promise~any~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: Project; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
+findFlatten() Promise~{ status: string; data: any; }~
+findPopulate() Promise~{ status: string; data: any; }~
+addInventorySheets() Promise~{ status: string; data: any; }~
+removeInventorySheets() Promise~{ status: string; data: any; }~
+addUser() Promise~{ status: string; data: any; }~
+removeUser() Promise~{ status: string; data: any; }~
+addLot() Promise~{ status: string; data: any; }~
+removeLot() Promise~{ status: string; data: any; }~
+deploy_project() Promise~any~
+reconciliateEsriProject() Promise~{ status: string; data: any; }~
        }
class RemoveContentLayerController{
            +removeContentLayerService: RemoveContentLayerService*
            +removeContentLayer() Promise~any~
        }
class RemoveContentLayerModule{
            
            
        }
class RemoveContentLayerService{
            +logger: any*
+airflowService: AirflowService
            +removeContentLayer() Promise~any~
        }
class TecnigralDomainsController{
            +tecnigralDomainsService: TecnigralDomainsService*
            +findAll() Promise~{ status: string; data: any; }~
+getByDomainName() Promise~{ status: string; data: any; }~
        }
class TecnigralDomainsModule{
            
            
        }
class TecnigralDomainsRepository{
            +logger: any*
+tecnigralDomainsModel: Model~TecnigralDomains~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--TecnigralDomainsRepository
class TecnigralDomainsService{
            +tecnigralDomainsRepository: TecnigralDomainsRepository*
            +findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
        }
class UserSettingsController{
            +userSettingsService: UserSettingsService*
            +create() { status: string; data: Promise~UserSetting~; }
+findPersonalSettings() Promise~{ status: string; data: any; }~
+findExpressionQueries() Promise~{ status: string; data: ExpressionQuery[]; }~
+patchPersonalSettings() Promise~{ status: string; data: any; }~
+findCustomView() Promise~{ status: string; data: CustomView[]; }~
+removeCustomView() Promise~{ status: string; data: any; }~
+addCustomView() Promise~{ status: string; data: any; }~
+addExpressionQuery() Promise~{ status: string; data: any; }~
+updateCustomView() Promise~{ status: string; data: any; }~
+findOne() { status: string; data: Promise~UserSetting~; }
+update() { status: string; data: Promise~any~; }
+remove() { status: string; data: Promise~any~; }
+removeExpressionQuery() Promise~{ status: string; data: any; }~
+updatelayerGroupPreferences() Promise~{ status: string; data: boolean; }~
+getLayerGroupPreferences() Promise~{ status: string; data: any; }~
        }
class UserSettingsModule{
            
            
        }
class UserSettingsRepository{
            +logger: any*
+userSettingsModel: Model~UserSetting~
+connection: Connection
+userConnection: Connection
+operationalConnection: Connection
            +add() any
+update() any
+remove() any
+getExpressionQueries() any
+addExpressionQuery() any
+updateExpressionQueries() any
+removeExpressionQueries() any
+updatelayerGroupPreferences() any
+getLayerGroupPreferences() any
        }
AbstractRepository~TDocument~<|--UserSettingsRepository
class UserSettingsService{
            +userSettingsRepository: UserSettingsRepository
            +create() { status: string; data: Promise~UserSetting~; }
+findOne() { status: string; data: Promise~UserSetting~; }
+update() { status: string; data: Promise~any~; }
+remove() { status: string; data: Promise~any~; }
+findCustomViewsForLot() Promise~{ status: string; data: CustomView[]; }~
+addCustomViewsForLot() Promise~{ status: string; data: any; }~
+updateCustomViewsForLot() Promise~{ status: string; data: any; }~
+removeCustomViewsForLot() Promise~{ status: string; data: any; }~
+findPersonalSettings() Promise~{ status: string; data: any; }~
+updatePersonalSettings() Promise~{ status: string; data: any; }~
+findExpressionQueries() Promise~{ status: string; data: ExpressionQuery[]; }~
+addExpressionQuery() Promise~{ status: string; data: any; }~
+removeExpressionQuery() Promise~{ status: string; data: any; }~
+updatelayerGroupPreferences() Promise~{ status: string; data: boolean; }~
+getLayerGroupPreferences() Promise~{ status: string; data: any; }~
        }
class VehicleController{
            +vehicleService: VehicleService*
            +create() Promise~{ status: string; data: Vehicle; }~
+createMany() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findOne() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class VehicleModule{
            
            
        }
class VehicleRepository{
            +logger: any*
+vehicleModel: Model~Vehicle~
+connection: Connection*
            
        }
AbstractRepository~TDocument~<|--VehicleRepository
class VehicleService{
            +vehicleRepository: VehicleRepository
            +create() Promise~{ status: string; data: Vehicle; }~
+createInBulk() Promise~{ status: string; data: any; }~
+findAll() Promise~{ status: string; data: any; }~
+findAllByTenantId() Promise~{ status: string; data: any; }~
+update() Promise~{ status: string; data: any; }~
+remove() Promise~{ status: string; data: any; }~
        }
class BcryptService{
            +saltOrRounds: number
            +hash() Promise~string~
+compare() Promise~boolean~
        }
class JwtAuthGuard{
            
            
        }
class LocalAuthGuard{
            
            
        }
class RolesGuard{
            +reflector: Reflector
            +canActivate() boolean
        }
CanActivate<|..RolesGuard
class RecoveryCredentials {
            <<interface>>
            +username: string
+recovery_key: string
+newPassword: string
            
        }
class SendEmail {
            <<interface>>
            +subject: string
+addressee: string[]
+body: string
            
        }
class IUserService {
            <<interface>>
            
            +findOne() Promise~User~
+findOneByName() Promise~User~
        }
class Role {
        <<enumeration>>
        superadmin
admin
basic
      }
class JwtStrategy{
            
            +validate() Promise~{ _id: any; username: any; tecnigral_role: any; }~
        }
class LocalStrategy{
            +authService: AuthService
            +validate() Promise~any~
        }
class UserRepository{
            +logger: any*
+userModel: Model~User~
+connection: Connection*
+configuratorConnection: Connection
            +createUserAndPlaceInProject() Promise~User~
+deleteAndCleanDB() Promise~{ status: string; data: any; }~
+find() Promise~any~
+findOneAndPopulate() Promise~any~
+findOneAndPopulateByName() Promise~any~
        }
AbstractRepository~TDocument~<|--UserRepository
class UserService{
            +logger: Logger
+userRepository: UserRepository*
+configService: ConfigService
+airflowService: AirflowService
            +create() Promise~User~
+executeCreateUserDag() Promise~any~
+findOne() Promise~User~
+findOneAndPopulate() Promise~User~
+findAllByProject() Promise~User[]~
+findOneByName() Promise~User~
+findOneByCompany() Promise~User~
+findOneByLotId() Promise~User~
+findAllByLotId() Promise~User[]~
+findAll() Promise~any~
+remove() Promise~any~
+executeRemoveUserDag() Promise~any~
+update() Promise~any~
+updateRoles() Promise~{ status: string; data: boolean; }~
+findOneAndUpdatePassword() { status: string; data: boolean; }
+getProfilePicture() Promise~{ profilePicture: string; }~
+setProfilePicture() Promise~{ status: string; }~
+checkUsername() Promise~{ status: string; data: any; }~
        }
class Role {
        <<enumeration>>
        superadmin
admin
basic
      }
IUserService<|..UserService
class AbstractRepository~TDocument~{
            +logger: Logger$*
+model: Model~TDocument~*
+connection: Connection*
            +create() Promise~TDocument~
+findOne() Promise~TDocument~
+findOneAndUpdate() Promise~any~
+updateMany() Promise~any~
+upsert() Promise~any~
+find() Promise~any~
+findWithPopulate() Promise~any~
+findWithSelect() Promise~any~
+delete() Promise~any~
+bulkInsert() Promise~any~
+bulkWrite() Promise~any~
+startTransaction() Promise~any~
        }
class AbstractDocument{
            +_id: Types.ObjectId
            
        }
class DatabaseModule{
            
            
        }
class HttpExceptionFilter{
            
            +catch() void
        }
ExceptionFilter<|..HttpExceptionFilter
class ParseObjectIdPipe{
            
            +transform() ObjectId
        }
PipeTransform<|..ParseObjectIdPipe
class Brigade{
            +name: string
+employees: Employee[]
+vehicles: Vehicle[]
+machines: Machine[]
            
        }
class CreateCorrectiveMaintenanceDto{
            +lotId: Types.ObjectId
+incidenceId: string
+municipality: string
+address?: string
+client?: string
+manufacturer?: string
+updatedAt: Date
+maintenanceComment: string
+usersReceptors: User[]
+BrigadeReceptor: Brigade[]
+equipmentIdentification?: EquipmentIdentification[]
+comments?: Comment[]
+isSigned: boolean
+signedBy: string[]
            
        }
class UpdateCorrectiveMaintenanceDto{
            
            
        }
class CorrectiveMaintenance{
            +lotId: Types.ObjectId
+incidenceId: string
+municipality: string
+address?: string
+client?: string
+manufacturer?: string
+updatedAt: Date
+maintenanceComment: string
+usersReceptors: User[]
+BrigadeReceptor: Brigade[]
+equipmentIdentification?: EquipmentIdentification[]
+comments?: Comment[]
+isSigned: boolean
+signedBy: Types.ObjectId[]
            
        }
AbstractDocument<|--CorrectiveMaintenance
class BrigadeDayQueryDTO{
            +lotId: string
+filterDate: Date
            
        }
class CreateExportDto{
            +featureLayerCollection: string
+layer: string
            
        }
class Expression{
            +field: Partial~WyredField~
+operator: string
+clause: string
+expression?: string
+module: Module
+layer: Layer
            
        }
class CreateExpressionQueryDto{
            +lotId: Types.ObjectId
+owner: string
+name: string
+createdAt: Date
+expressionList: Expression[]
+module: Module
+fields: string[]
+layer: Layer
+projectId: string
            
        }
class UpdateExpressionQueryDto{
            
            
        }
class ExpressionQuery{
            +lotId: Types.ObjectId
+owner: Types.ObjectId
+name: string
+createdAt: Date
+expressionList: Expression[]
+module: Module
+fields: string[]
+layer: Layer
+projectId: string
            
        }
AbstractDocument<|--ExpressionQuery
class Logentry{
            +user: Partial~User~
+description: string
+dateAt: Date
            
        }
class CorrectiveMaintenance{
            +lotId: string
+incidenceId: string
+municipality: string
+address?: string
+client?: string
+manufacturer?: string
+updatedAt: Date
+maintenanceComment: string
+usersReceptors: User[]
+brigadeReceptor: Brigade[]
+equipmentIdentification?: EquipmentIdentification[]
+comments?: Comment[]
+isSigned: boolean
+signedBy: string[]
            
        }
class CreateIncidenceDto{
            +lotId: string
+parentIncidence?: string
+code: string
+incidenceNumber: string
+actualState: State
+previousStates?: string[]
+createdAt: Date
+createdBy: string
+lastUpdated: { updatedAt: Date; updatedBy: string; job: string; }
+updateLog: [{ updatedAt: Date; updatedBy: string; job: string; }]
+origins: { origin: string; citizenData?: { name: string; surname: string; email: string; phone: number; }; }
+description?: { author: string; comment: string; job: string; dateAt: Date; }
+priorityData: { dateStart: Date; dateLimit: Date; priority: string; }
+address?: string
+latitude?: number
+longitude?: number
+changelog?: Logentry[]
+pickedElements?: { url: string; elements: any[]; }
+tasksProposal: Action[]
+notifiedTo: any[]
+hasAdvancedIncidence: boolean
+advancedIncidence?: Advancedincidence
+correctiveMaintenance: CorrectiveMaintenance
+attachmentsEsriId?: string
+comments?: Comment[]
+incidenceClosed?: { finalValuation: string; closingDate: Date; author: string; job: string; comments: Comment[]; }
            
        }
class QueryDTO{
            +expressions: Expression[]
+objectIds: number[]
            
        }
class UpdateIncidenceDto{
            
            
        }
class GeneralInfo{
            +hour: string
+batch: number
+species: string
+origin: string
+district: string
+date: Date
+udAdministrative: string
+company: string
            
        }
class TriggerFactorsInfo{
            +weatherEvent: string
+faults: string
            
        }
class LocationFault{
            +faultLocation: string
+resultIncidence: string
+typology: string
+heightFailure: number
            
        }
class MagnitudeFailure{
            +status: string
+diameter: number
+ong: number
+fault: string
+totalheight: string
+diameterBreakPoint: number
+faultTrunk: string
+associatedDefect: string
+rootballDiameter: number
            
        }
class DamageCaused{
            +vegetation: string
+infrastructure: string
+goods: string
+people: string
+description: string
+damageSeverity: string
            
        }
class IncidenceMonitoring{
            +performance: string
+accurateReview: string
            
        }
class Remarks{
            +remark: string
            
        }
class Images{
            +images: string[]
            
        }
class Advancedincidence{
            +generalInfo: GeneralInfo
+triggerFactorsInfo: TriggerFactorsInfo
+locationFault: LocationFault
+magnitudeFailure: MagnitudeFailure
+damageCaused: DamageCaused
+incidenceMonitoring: IncidenceMonitoring
+remarks: Remarks
+images: Images
            
        }
class Comment{
            +author: string
+comment: string
+job: string
+dateAt: Date
            
        }
class Origins{
            +origin: string
+citizenData?: { name: string; surname: string; email: string; phone: number; }
            
        }
class LastUpdated{
            +updatedAt: Date
+updatedBy: string
+job: string
            
        }
class UpdateLog{
            +updatedAt: Date
+updatedBy: string
+job: string
            
        }
class Description{
            +author: string
+comment: string
+job: string
+dateAt: Date
            
        }
class PriorityData{
            +dateStart: Date
+dateLimit: Date
+priority: string
            
        }
class PickedElements{
            +url: string
+elements: any[]
            
        }
class State{
            +_id?: string
+value: string
+color: string
+locations: { [lang: string]: string; }
+constrains: WyredField[]
+message: string
+isDefault: boolean
+isStandard: boolean
            
        }
class CorrectiveMaintenance{
            +lotId: string
+incidenceId: string
+municipality: string
+address?: string
+client?: string
+manufacturer?: string
+updatedAt: Date
+maintenanceComment: string
+usersReceptors: User[]
+brigadeReceptor: Brigade[]
+equipmentIdentification?: EquipmentIdentification[]
+comments?: Comment[]
+isSigned: boolean
+signedBy: string[]
            
        }
class Incidence{
            +lotId: string
+parentIncidence?: string
+code: string
+incidenceNumber: string
+actualState: State
+previousStates?: string[]
+createdAt: Date
+createdBy: string
+lastUpdated?: LastUpdated
+updateLog?: UpdateLog[]
+origins: Origins
+description?: Description
+priorityData: PriorityData
+tasksProposal: Action[]
+notifiedTo: any[]
+hasAdvancedIncidence: boolean
+correctiveMaintenance: CorrectiveMaintenance
+advancedIncidence?: Advancedincidence
+attachmentsEsriId?: string
+comments?: Comment[]
+incidenceClosed?: { finalValuation: string; closingDate: Date; author: string; job: string; comments: Comment[]; }
+address?: string
+latitude?: number
+longitude?: number
+changelog?: { user: Types.ObjectId; description: string; dateAt: Date; }[]
+pickedElements?: PickedElements
            
        }
AbstractDocument<|--Incidence
class State{
            +value: string
+color: string
+locations?: any
+index?: number
            
        }
class Origin{
            +value: string
+color: string
            
        }
class Priority{
            +value: string
+color: string
            
        }
class ManualElement{
            +units: number
+element: string
+specie: string
+zone: string
            
        }
class PickedElements{
            +url: string
+elements: any[]
            
        }
class Action{
            +name: string
+color: string
+locations: { [lang: string]: string[]; }
            
        }
class Comment{
            +author: string
+comment: string
+job: string
+dateAt: Date
            
        }
class CreateJobDto{
            +type?: JobType
+lotId: string
+creator: User
+createdAt: Date
+customId?: string
+startTime: Date
+endTime: Date
+state: State
+statesLog: State[]
+lastUpdated: { updatedAt: Date; updatedBy: User; }
+comments: Comment[]
+origin: Origin
+actions: Action[]
+priority: Priority
+description: string
+manualElements?: ManualElement[]
+pickedElements?: PickedElements
+zone?: string
+files?: string[]
+performance?: number
+estimatedTime?: number
+otId?: string
+latitude?: number
+longitude?: number
+incidenceId?: string
+pluses?: Plus[]
+materials?: Material[]
+outcome?: Outcome
            
        }
class JobType {
        <<enumeration>>
        inventory
inspection
quality
maintenance
      }
class UpdateJobDto{
            
            
        }
class Action {
            <<interface>>
            +name: string
+color: string
+fontColor: string
            
        }
class ManualElement{
            +units: number
+element: string
+specie: string
+zone: string
            
        }
class Origin{
            +value: string
+color: string
            
        }
class Priority{
            +value: string
+color: string
            
        }
class State{
            +value: string
+color: string
+constrains: WyredField[]
+message: string
+isDefault: boolean
+isStandard: boolean
            
        }
class StateItem {
        <<enumeration>>
        Incidences
Job
Scheduler
WorkOrder
Report
ElementSheet
InspectionSheet
Quality
      }
class User{
            +_id?: string
+username: string
+name: string
+surname: string
+profilePicture: string
+email: string
+phone?: string
+company: string
+companyType: "administration" | "team"
+companyJob?: string
+tecnigral_role: Role
+team_role: string
+isAdmin?: boolean
+projectIds: string[]
+lotsIds: string[]
+modules?: Module[]
            
        }
class LastUpdated{
            +updatedAt: Date
+updatedBy: User
            
        }
class Plus{
            +value: string
+units: number
            
        }
class Material{
            +name: string
+type: string
+brand: string
+price: number
+units: number
            
        }
class Outcome{
            +originalElements: number
+completedElemnets: number
+missingTime: number
+temporalImposibility: number
+permanentImposibility: number
+others: number
            
        }
class Job{
            +type?: JobType
+lotId: string
+incidenceId?: string
+creator: Partial~User~
+createdAt: Date
+customId?: string
+startTime: Date
+endTime: Date
+state: State
+statesLog: State[]
+lastUpdated: LastUpdated
+comments: Comment[]
+origin: Origin
+actions: Action[]
+priority: Priority
+description: string
+manualElements?: ManualElement[]
+pickedElements?: PickedElements
+zone?: string
+attachmentsEsriId?: string
+performance?: number
+estimatedTime?: number
+otId?: string
+latitude?: number
+longitude?: number
+pluses?: Plus[]
+materials?: Material[]
+outcome?: Outcome
            
        }
class JobType {
        <<enumeration>>
        inventory
inspection
quality
maintenance
      }
AbstractDocument<|--Job
class AddCommentDto{
            +notificationId: string
+text: string
            
        }
class CreateNotificationDto{
            +type: NotificationType
+state: NotificationState
+priority: NotificationPriority
+receptors: Types.ObjectId[]
+dateLimit?: Date
+comments?: { user: Types.ObjectId; text: string; }[]
+body?: { content: string; data: any; }
+ttl: Date
            
        }
class RemoveCommentDto{
            +notificationId: string
+commentId: string
            
        }
class UpdateNotificationDto{
            
            
        }
class Notification{
            +type: NotificationType
+state: NotificationState
+priority: NotificationPriority
+sender: Types.ObjectId
+receptors: Types.ObjectId[]
+dateLimit?: Date
+comments?: { user: Types.ObjectId; text: string; }[]
+body?: { content: string; data: any; }
+ttl: Date
            
        }
AbstractDocument<|--Notification
class NotificationPool{
            +notification: Types.ObjectId
            
        }
AbstractDocument<|--NotificationPool
class Brigade{
            +name: string
+color: string
+fontColor: string
+employees: Employee[]
+vehicles: Vehicle[]
+machines: Machine[]
            
        }
class Type{
            +value: PartType
+color: string
            
        }
class CreatePartDto{
            +tenantId: string
+customId?: string
+type: Type
+jobs: Job[]
+state: State
+brigade: Brigade
+creator: User
+createdAt: Date
+startTime: Date
+endTime?: Date
+isSigned: boolean
+signedBy: User[]
            
        }
class UpdatePartDto{
            
            
        }
class Type{
            +value: PartType
+color: string
            
        }
class Parts{
            +tenantId: string
+customId?: string
+type: Type
+jobs: Job[]
+state: State
+brigade: Brigade
+creator: User
+createdAt: Date
+startTime: Date
+endTime?: Date
+isSigned: boolean
+signedBy: User[]
            
        }
AbstractDocument<|--Parts
class CreateSummaryDto{
            +lotId: Types.ObjectId
            
        }
class UpdateSummaryDto{
            
            
        }
class Summary{
            +lotId: Types.ObjectId
            
        }
AbstractDocument<|--Summary
class Brigade{
            +name: string
+employees: Employee[]
+vehicles: Vehicle[]
+machines: Machine[]
            
        }
class Machine{
            +machine_type: string
+brand: string
+model: string
            
        }
class Vehicle{
            +brand: string
+model: string
+license_plate: string
+year: string
+kilometers: string
+fuel_energy: string
            
        }
class Employee{
            +_id?: string
+name: string
+surname: string
+email: string
+phone: string
+job: string
+workplace: string
+role: string
+isAdmin?: boolean
            
        }
class State{
            +value: string
+color: string
+locations?: any
+index?: number
            
        }
class CreateWorkOrdersDto{
            +lotId: string
+creator: User
+createdAt: Date
+customId?: string
+brigade: Brigade
+startTime: Date
+endTime: Date
+comments: Comment[]
+origin: Origin
+jobs: Types.ObjectId[]
+state: State
+statesLog: State[]
+lastUpdated: { updatedAt: Date; updatedBy: User; }
            
        }
class CreateWorkOrdersDtoWithJobs{
            +lotId: string
+creator: User
+createdAt: Date
+customId?: string
+brigade: Brigade
+startTime: Date
+endTime: Date
+comments: Comment[]
+origin: Origin
+jobs: Job[]
+state: State
+statesLog: State[]
+lastUpdated: { updatedAt: Date; updatedBy: User; }
            
        }
class UpdateWorkOrdersDtoWithJobs{
            
            
        }
class UpdateWorkOrdersDto{
            
            
        }
class Brigade{
            +_id?: string
+tenantId?: string
+name: string
+color: string
+fontColor: string
+employees: Employee[]
+vehicles: Vehicle[]
+machines: Machine[]
            
        }
class Employee{
            +_id?: string
+tenantId?: string
+name: string
+surname: string
+email: string
+phone: string
+job: string
+workplace: string
+role: string
+absenteeism?: Absenteeism[]
+arbomapUserId?: string
            
        }
class Absenteeism{
            +date: Date
+reason: ReasonAbsenteeism
            
        }
class ReasonAbsenteeism {
        <<enumeration>>
        medicalSickLeave
unionHours
vacation
absenteeism
      }
class Machine{
            +_id?: string
+tenantId?: string
+machine_type: string
+brand: string
+model: string
+state: string
+observations?: string
            
        }
class Vehicle{
            +_id?: string
+tenantId?: string
+brand: string
+model: string
+license_plate: string
+year: string
+kilometers: string
+fuel_energy: string
            
        }
class LastUpdated{
            +updatedAt: Date
+updatedBy: Partial~User~
            
        }
class State{
            +value: string
+color: string
+locations?: any
+index?: number
            
        }
class User{
            +_id?: string
+username: string
+name: string
+surname: string
+profilePicture: string
+email: string
+phone?: string
+company: string
+companyType: "administration" | "team"
+companyJob?: string
+tecnigral_role: Role
+team_role: string
+isAdmin?: boolean
+projectIds: string[]
+lotsIds: string[]
+modules?: Module[]
            
        }
class WorkOrders{
            +lotId: string
+creator: User
+createdAt: Date
+customId?: string
+brigade: Brigade[]
+startTime: Date
+endTime: Date
+comments: Comment[]
+origin: Origin
+jobs: Types.ObjectId[]
+state: State
+statesLog: State[]
+lastUpdated: LastUpdated
+doneRatio: number
            
        }
AbstractDocument<|--WorkOrders
class CreateActionsCatalogueDto{
            +tenantId: Types.ObjectId
+actions: Action[]
            
        }
AbstractDocument<|--CreateActionsCatalogueDto
class UpdateActionsCatalogueDto{
            
            
        }
class Action{
            +name: string
+color: string
            
        }
class Actions{
            +tenantId: Types.ObjectId
+actions: Action[]
            
        }
AbstractDocument<|--Actions
class LayersToAddDomain{
            +layerName: string
+layerUrl: string
+assetType: string
+catalogueOption: string
            
        }
class LayersToAddDomainDag{
            +layerName: string
+layerUrl: string
+assetType: string
+catalogueCollectionName: string
+catalogueOption: string
            
        }
class CreateAddDomainsDto{
            +layersToAddDomain: LayersToAddDomain[]
            
        }
class CreateBrigadeDto{
            +tenantId: Types.ObjectId
+name: string
+color: string
+fontColor: string
+employees: Types.ObjectId[]
+vehicles: Types.ObjectId[]
+machines: Types.ObjectId[]
+materials: Types.ObjectId[]
            
        }
AbstractDocument<|--CreateBrigadeDto
Pick<|..CreateBrigadeDto
class UpdateBrigadeDto{
            
            
        }
class Brigade{
            +tenantId: Types.ObjectId
+name: string
+color: string
+fontColor: string
+employees: Types.ObjectId[]
+vehicles: Types.ObjectId[]
+machines: Types.ObjectId[]
+materials: Types.ObjectId[]
            
        }
AbstractDocument<|--Brigade
class CreateCatalogueDto{
            +codigoespecie: string
+nombre_cientifico: string
+genero: string
+nombre_comun: string
+variedad: string
+crecimiento: string
+forma: string
+rama: string
+hoja: string
+fruto: string
+sexualidad: string
+tronco: string
+yema: string
+flor: string
+semilla: string
+meseshojas: number
+mesesfloracion: number
+mesesfrutos: number
            
        }
class TecnigralCatalogue{
            +codigoespecie: string
+nombre_cientifico: string
+genero: string
+nombre_comun: string
+variedad: string
+crecimiento: string
+forma: string
+rama: string
+hoja: string
+fruto: string
+sexualidad: string
+tronco: string
+yema: string
+flor: string
+semilla: string
+meseshojas: number
+mesesfloracion: number
+mesesfrutos: number
            
        }
AbstractDocument<|--TecnigralCatalogue
class CreateCustomCatalogueDto{
            +tenantId: Types.ObjectId
+lotId: Types.ObjectId
+name: string
+layers: string[]
+catalogue: [{ field: string; values: string[]; }]
            
        }
class RequestCatalogInsertion{
            +projectName: string
+subject: string
+mailTo: string[]
+body: string
+description: any
            
        }
class UpdateCustomCatalogueDto{
            
            
        }
class CustomCatalogue{
            +tenantId: Types.ObjectId
+lotId: Types.ObjectId
+name: string
+layers: string[]
+catalogue: [{ field: string; values: string[]; }]
            
        }
AbstractDocument<|--CustomCatalogue
class CreateEmployeeDto{
            +tenantId: Types.ObjectId
+name: string
+surname: string
+email: string
+phone: string
+job: string
+workplace: string
+role: string
+isAdmin?: boolean
+absenteeism?: Absenteeism[]
+arbomapUserId?: User
            
        }
AbstractDocument<|--CreateEmployeeDto
class UpdateEmployeeDto{
            
            
        }
class Employee{
            +tenantId: Types.ObjectId
+name: string
+surname: string
+email: string
+phone: string
+job: string
+workplace: string
+role: string
+isAdmin?: boolean
+absenteeism?: Absenteeism[]
+arbomapUserId?: Types.ObjectId
            
        }
AbstractDocument<|--Employee
class CreateGranadaCataloguePalmDto{
            +especie: string
+alergenicidad: string
+especieinvasora: string
+k: number
+valorc: number
            
        }
class GranadaCataloguePalm{
            +especie: string
+alergenicidad: number
+especieinvasora: number
+k: number
+valorc: number
            
        }
AbstractDocument<|--GranadaCataloguePalm
class CreateGranadaCatalogueTreeDto{
            +especie: string
+clasificacion: string
+gradocov: number
+tipocrecimiento: string
+especieinvasora: number
+alergenicidad: number
            
        }
class GranadaCatalogueTree{
            +especie: string
+clasificacion: string
+gradocov: number
+tipocrecimiento: string
+especieinvasora: number
+alergenicidad: number
            
        }
AbstractDocument<|--GranadaCatalogueTree
class GranadaPalmDomainsDto{
            +domainName: string
+originalCatalogueName: string
+domain: string[]
            
        }
class GranadaPalmDomains{
            +domainName: string
+originalCatalogueName: string
+domain: string[]
            
        }
AbstractDocument<|--GranadaPalmDomains
class GranadaTreeDomainsDto{
            +domainName: string
+originalCatalogueName: string
+domain: string[]
            
        }
class GranadaTreeDomains{
            +domainName: string
+originalCatalogueName: string
+domain: string[]
            
        }
AbstractDocument<|--GranadaTreeDomains
class WyredField{
            +alias: string
+defaultValue: any
+editable: boolean
+name: string
+nullable: boolean
+type: string
+domain: string[]
+isAlwaysIncluded?: boolean
+visible: boolean
+isMandatoryField: boolean
+path: string
+isStandard?: boolean
            
        }
class AssetCategory{
            +name: string
+attributes: WyredField[]
            
        }
class CreateInspectSheetsDto{
            +asset: inspectionAsset
+configurationType: configType
+categories: AssetCategory[]
+reducedViewAttr: WyredField[]
            
        }
class configType {
        <<enumeration>>
        standard
advanced
      }
class inspectionAsset {
        <<enumeration>>
        f1Tree
f1Palm
f1qtra
vtaIsa
childrenArea
bio
      }
class WyredField{
            +alias: string
+defaultValue: string
+editable: boolean
+name: string
+nullable: boolean
+type: string
+domain: string[]
+isAlwaysIncluded?: boolean
+visible: boolean
+isMandatoryField: boolean
+path: string
+isStandard?: boolean
            
        }
class AssetCategory{
            +name: string
+attributes: WyredField[]
            
        }
class InspectSheet{
            +asset: inspectionAsset
+configurationType: configType
+categories: AssetCategory[]
+reducedViewAttr: WyredField[]
            
        }
class configType {
        <<enumeration>>
        standard
advanced
      }
class inspectionAsset {
        <<enumeration>>
        f1Tree
f1Palm
f1qtra
vtaIsa
childrenArea
bio
      }
AbstractDocument<|--InspectSheet
class WyredField{
            +alias: string
+defaultValue: any
+editable: boolean
+name: string
+nullable: boolean
+type: string
+domain: string[]
+isAlwaysIncluded?: boolean
+visible: boolean
+isMandatoryField: boolean
+path: string
+isStandard?: boolean
            
        }
class AssetCategory{
            +name: string
+attributes: WyredField[]
            
        }
class CreateInventorySheetsDto{
            +asset: string
+configurationType: ConfigType
+categories: AssetCategory[]
+reducedViewAttr: WyredField[]
            
        }
class ConfigType {
        <<enumeration>>
        standard
advanced
      }
class CreateCategoryDto{
            +asset: InventoryAsset
+categoryName: string
+attribute: WyredField
            
        }
class WyredField{
            +alias: string
+defaultValue: string
+editable: boolean
+name: string
+nullable: boolean
+type: string
+domain: string[]
+visible: boolean
+path: string
+isAlwaysIncluded?: boolean
+isMandatoryField: boolean
+isStandard?: boolean
            
        }
class AssetCategory{
            +name: string
+attributes: WyredField[]
            
        }
class InventorySheet{
            +asset: string
+configurationType: ConfigType
+categories: AssetCategory[]
+reducedViewAttr: WyredField[]
            
        }
class ConfigType {
        <<enumeration>>
        standard
advanced
      }
AbstractDocument<|--InventorySheet
class CreateLotsDto{
            +tenantId: Types.ObjectId
+title: string
+description?: string
+layerGroups: LayerGroup[]
+rolesConfig?: RoleGroup[]
+inventory_assetsSheets: AssetSheetInventory[]
+inspection_assetsSheets: AssetSheetInspection[]
+quality_assetsSheets: AssetSheetQuality[]
+brigades: Brigade[]
+states: { incidences: State[]; job: State[]; scheduler: State[]; workorder: State[]; report: State[]; elementSheet: State[]; inspectionSheet: State[]; quality: State[]; }
+timetables: any
+languages: any
+certifications: any
+performance: any
            
        }
class PermitDTO{
            +lotId: string
+roleName: string
+module: Module
            
        }
class RoleGroupDto{
            +name: string
+permits: { [module: string]: Permit; }
            
        }
class UpdateLotsDto{
            
            
        }
class Lot{
            +tenantId?: Types.ObjectId
+title: string
+description?: string
+rolesConfig?: RoleGroup[]
+layerGroups: LayerGroup[]
+inventory_assetsSheets: AssetSheetInventory[]
+inspection_assetsSheets: AssetSheetInspection[]
+quality_assetsSheets: AssetSheetQuality[]
+brigades: Brigade[]
+states: { incidences: State[]; job: State[]; scheduler: State[]; workorder: State[]; report: State[]; elementSheet: State[]; inspectionSheet: State[]; quality: State[]; }
+timetables: any
+languages: any
+certifications: any
+performance: any
            
        }
AbstractDocument<|--Lot
class CreateMachineDto{
            +tenantId: Types.ObjectId
+machine_type: string
+brand: string
+model: string
+state?: string
+observations?: string
            
        }
AbstractDocument<|--CreateMachineDto
class UpdateMachineDto{
            
            
        }
class Machine{
            +tenantId: Types.ObjectId
+machine_type: string
+brand: string
+model: string
+state?: string
+observations?: string
            
        }
AbstractDocument<|--Machine
class CreateMaterialsDto{
            +tenantId: Types.ObjectId
+name: string
+type: string
+brand: string
+price: number
            
        }
AbstractDocument<|--CreateMaterialsDto
class UpdateMaterialsDto{
            
            
        }
class Materials{
            +tenantId: Types.ObjectId
+name: string
+type: string
+brand: string
+price: number
            
        }
AbstractDocument<|--Materials
class AddLotDto{
            +projectId: string
+lotId: string
            
        }
class AddUserDto{
            +projectId: string
+userId: string
            
        }
class CreateProjectDto{
            +name: string
+contracts: string[]
+attachmentURL: string
+zonification: LayerGroup
+allowedInventorySheets: InventoryAsset[]
+users: Types.ObjectId[]
+lots: Types.ObjectId[]
+groups: LayerGroup[]
+mapCenter: MapCenter
+status: string
+esriItemID: string
            
        }
class DeployConfigDto{
            +projectId: string
            
        }
class FileDto{
            +name: string
            
        }
class InventoryAssetDto{
            +projectId: string
+inventoryAsset: InventoryAsset
            
        }
class RemoveLotDto{
            +projectId: string
+lotId: string
            
        }
class RemoveUserDto{
            +projectId: string
+userId: string
            
        }
class UpdateProjectDto{
            
            
        }
class MapCenter{
            +lat: number
+long: number
            
        }
class Project{
            +name: string
+contracts: string[]
+attachmentURL: string
+groups: LayerGroup[]
+allowedInventorySheets: InventoryAsset[]
+zonification: LayerGroup
+lots: Types.ObjectId[]
+users: Types.ObjectId[]
+mapCenter: MapCenter
+status: string
+esriItemID?: string
            
        }
AbstractDocument<|--Project
class TecnigralDomainsDto{
            +domainName: string
+domain: string[]
            
        }
class TecnigralDomains{
            +domainName: string
+domain: string[]
            
        }
AbstractDocument<|--TecnigralDomains
class CreateUserSettingDto{
            +user: Types.ObjectId
+customViews: CustomView[]
+personalSettings: any
+expressionQueries: Types.ObjectId[]
+layerGroupPreferences: LayerGroupPreferences
            
        }
class UpdateUserSettingDto{
            
            
        }
class CustomView{
            +lotId: string
+name: string
+description: string
+creator: string
+last_modified: Date
+layerConfigs: ViewConfig[]
            
        }
class ViewConfig{
            +layerTitle: string
+rendererJSON: any
+labelingJSON: any
+isLabelingActive: boolean
            
        }
class LayerGroupPreferences{
            
            
        }
class UserSetting{
            +user: Types.ObjectId
+customViews: CustomView[]
+personalSettings: any
+expressionQueries: Types.ObjectId[]
+layerGroupPreferences: LayerGroupPreferences
            
        }
AbstractDocument<|--CustomView
AbstractDocument<|--UserSetting
class CreateVehicleDto{
            +tenantId: Types.ObjectId
+brand: string
+model: string
+license_plate: string
+year: string
+kilometers: string
+fuel_energy: string
            
        }
AbstractDocument<|--CreateVehicleDto
class UpdateVehicleDto{
            
            
        }
class Vehicle{
            +tenantId: Types.ObjectId
+brand: string
+model: string
+license_plate: string
+year: string
+kilometers: string
+fuel_energy: string
            
        }
AbstractDocument<|--Vehicle
class User{
            +username: string
+name: string
+surname: string
+profilePicture: string
+email: string
+phone?: string
+company: string
+companyType: CompanyType
+companyJob?: string
+tecnigral_role: Role
+team_role: string
+isAdmin?: boolean
+projectsId: Types.ObjectId[]
+lotsId: Types.ObjectId[]
+modules?: Module[]
+password: string
+isCreatedInArcgis?: boolean
+rec_key?: string
            
        }
AbstractDocument<|--User
```
