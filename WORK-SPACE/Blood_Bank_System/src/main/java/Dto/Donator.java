package Dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Donator {
	
	@Id
	@SequenceGenerator(initialValue = 100000 ,allocationSize = 1,sequenceName = "did",name = "did")
	@GeneratedValue(generator = "did")
	long did;
	
	String dname;
	
	String demail;
	
	long dmobile;
	
	int dage;
	
	String dbloodgroup;
	
	String dgender;
	
	String password;

	public long getDid() {
		return did;
	}

	public void setDid(long did) {
		this.did = did;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public String getDemail() {
		return demail;
	}

	public void setDemail(String demail) {
		this.demail = demail;
	}

	public long getDmobile() {
		return dmobile;
	}

	public void setDmobile(long dmobile) {
		this.dmobile = dmobile;
	}

	public int getDage() {
		return dage;
	}

	public void setDage(int dage) {
		this.dage = dage;
	}

	public String getDbloodgroup() {
		return dbloodgroup;
	}

	public void setDbloodgroup(String dbloodgroup) {
		this.dbloodgroup = dbloodgroup;
	}

	public String getDgender() {
		return dgender;
	}

	public void setDgender(String dgender) {
		this.dgender = dgender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
		
	
}
