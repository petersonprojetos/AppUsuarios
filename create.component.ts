import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private service:ApiserviceService, private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      perfis: this.fb.array([]),
      nome:  ['', Validators.required],
      login: ['', Validators.required],
      cpf:   ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required]

    })
  }


  //select 
  option: Array<any> = [
    {name: " ", value:0},
    {name:"Cadastro", value:1},
    {name:"Auditoria Concorrente", value:2},
    {name:"Pagamento", value:3},
    {name:"Relatorios BI", value:4},
    {name:"Credenciamento", value:5},
    {name:"AIS", value:6},
    {name:"Core", value:7},
    {name:"Relacionamento", value:8},
    {name:"Relatorios", value:9},
    {name:"Cobranca", value:10},
    {name:"Setup", value:11},
    {name:"Analise De Contas", value:12},
    {name:"Autorização", value:13},
    {name:"Atendimento", value:14},
    {name:"Editor De Regras", value:15},
    {name:"Faturamento", value:16}
  ]

  //selecionado
  selecionado: string = ''
  selecionar(event:any){
    this.selecionado = event.target.value
    console.log(this.selecionado)
  }

  aplicar(event:any){
    console.log("aaa")
  }

//checkboxes dos perfis
  Cadastro: Array<any> = [
    {name: 'Analista de Cadastro', value: 'Cadastro - Analista de Cadastro'},
    {name: 'Administrador', value: 'Cadastro - Administrador'},
    {name: 'Consulta cadastro online', value: 'Cadastro - Consulta cadastro online'},
    {name: 'Consulta', value: 'Cadastro - Consulta'},
    {name: 'Gestor', value: 'Cadastro - Gestor'},
  ]

  AuditoriaConcorrente: Array<any> = [
    {name: 'Criador', value: 'Auditoria Concorrente- Criador'},
    {name: 'Administrador', value: 'Auditoria Concorrente - Administrador'},
    {name: 'Prestador', value: 'Auditoria Concorrente - Prestador'}
  ]

  Pagamento: Array<any> = [
    {name: 'Validação de Glosas', value: 'Pagamento - Validação de Glosas'},
    {name: 'Pagamento', value: 'Pagamento - Pagamento'},
    {name: 'Aprovação', value: 'Pagamento - Aprovação'},
    {name: 'Contas Médicas', value: 'Pagamento - Contas Médicas'},
    {name: 'Protocolo', value: 'Pagamento - Protocolo'},
    {name: 'Mestre', value: 'Pagamento - Mestre'},
    {name: 'Administrador', value: 'Pagamento - Administrador'},
    {name: 'Consultar Pagamento', value: 'Pagamento - Consultar Pagamento'}
  ]

  RelatorioBI: Array<any> = [
    {name: 'Usuário', value: 'Relatórios BI - Criador'},
    {name: 'Administrador', value: 'Relatórios BI - Administrador'}
  ]

  Credenciamento: Array<any> = [
    {name: 'Administrador', value: 'Credenciamento - Criador'},
    {name: 'Operadora', value: 'Credenciamento  - Administrador'},
    {name: 'Prestador', value: 'Credenciamento  - Prestador'}
  ]

  AIS: Array<any> = [
    {name: 'Agendador', value: 'AIS - Agendador'},
    {name: 'Beneficiário', value: 'AIS - Beneficiário'},
    {name: 'Supervisor', value: 'AIS - Supervisor'},
    {name: 'Administrador', value: 'AIS - Administrador'},
    {name: 'Atendente', value: 'AIS - Atendente'},
    {name: 'Atendente - Liberar Atendimentos', value: 'AIS - Atendente - Liberar Atendimentos'}
  ]

  Core: Array<any> = [
    {name: 'Administrador', value: 'Core - Administrador'}
  ]

  Relacionamento: Array<any> = [
    {name: 'Administrador', value: 'Relacionamento - Administrador'},
    {name: 'Atendente', value: 'Relacionamento - Atendente'},
    {name: 'Backoffice', value: 'Relacionamento - Backoffice'},
    {name: 'Gestor da Área de Negócios', value: 'Relacionamento - Gestor da Área de Negócios'}
  ]

  Relatorios: Array<any> = [
    {name: 'Criador', value: 'Relatórios - Criador'},
    {name: 'Visualizador', value: 'Relatórios - Visualizador'}
  ]

  Cobranca: Array<any> = [
    {name: 'Administrador', value: 'Cobrança - Administrador'},
    {name: 'Gestor', value: 'Cobrança - Gestor'}
  ]

  Setup: Array<any> = [
    {name: 'Administrador', value: 'Setup - Administrador'},
    {name: 'Usuário', value: 'Setup - Usuário'},
    {name: 'SSO Usuário', value: 'Setup - Usuário'}
  ]

  AnaliseDeContas: Array<any> = [
    {name: 'Auditor', value: 'Análise de Contas - Auditor'},
    {name: 'Operadora', value: 'Análise de Contas - Operadora'},
    {name: 'Administrador', value: 'Análise de Contas - Administrador'},
    {name: 'Prestador', value: 'Análise de Contas - Prestador'},
    {name: 'Visualização', value: 'Análise de Contas - Visualização'},
    {name: 'Analista', value: 'Análise de Contas - Analista'},
    {name: 'Gestor', value: 'Análise de Contas - Gestor'}
  ]

  Autorizacao: Array<any> = [
    {name: 'Biometria', value: 'Autorização - Biometria'},
    {name: 'Consulta', value: 'Autorização - Consulta'},
    {name: 'Cadastro de Prestador', value: 'Autorização - Cadastro de Prestador'},
    {name: 'Médico', value: 'Autorização - Médico'},
    {name: 'Gestor', value: 'Autorização - Gestor'},
    {name: 'Gestão da Autorização', value: 'Autorização - Gestão da Autorização'},
    {name: 'Auditor', value: 'Autorização - Auditor'},
    {name: 'Solicitante', value: 'Autorização - Solicitante'},
    {name: 'Administrador', value: 'Autorização - Administrador'},
    {name: 'Intercorrência', value: 'Autorização - Intercorrência'},
    {name: 'Analista', value: 'Autorização - Analista'}
  ]

  Atendimento: Array<any> = [
    {name: 'Agendamento', value: 'Atendimento - Agendamento'},
    {name: 'Médico Solicitante', value: 'Atendimento - Médico Solicitante'},
    {name: 'Prestador', value: 'Atendimento - Prestador'},
    {name: 'Criador', value: 'Atendimento - Administrador'},
    {name: 'Leitura de Biometria', value: 'Atendimento - Leitura de Biometria'},
    {name: 'Execução de Guias', value: 'Atendimento - Execução de Guias'}
  ]

  EditorDeRegras: Array<any> = [
    {name: 'Desenvolvedor', value: 'Editor de Regras - Desenvolvedor'},
    {name: 'Analista', value: 'Editor de Regras - Analista'},
    {name: 'Gerente', value: 'Editor de Regras - Gerente'},
    {name: 'Administrador', value: 'Editor de Regras - Administrador'}
  ]

  Faturamento: Array<any> = [
    {name: 'Administrador', value: 'Faturamento - Administrador'},
    {name: 'Consig', value: 'Faturamento - Consig'}
  ]

  //listagem do checkbox
  onCheckboxChange(e:any){
    const perfis: FormArray = this.userForm.get('perfis') as FormArray
    console.log(perfis)
    if (e.target.checked) {
      perfis.push(new FormControl(e.target.value))
    }else{
      let i:number = 0
      perfis.controls.forEach((item:any) => {
        if(item.value == e.target.value){
          perfis.removeAt(i)
          return
        }
        i++
      })
    }
  }

  userForm: FormGroup

  ngOnInit(): void {
  }

  errormsg:any;
  sucessmsg:any;

  //enviar 
  userSubmit(){
      if(this.userForm.valid){
        console.log(this.userForm.value)
        this.service.createData(this.userForm.value).subscribe((res)=>{
          console.log(res,'res==>')
          this.userForm.reset()
          this.sucessmsg = res.message
        })
      }
      else{
        this.errormsg = 'preencha todas as lacunas'
      }
      console.log(this.userForm.value)
  }
}
