# Readable 2x crops of the real product screenshots (round 3). Run from anywhere: python3 scripts/make-crops.py
# Sources: .proof-staging/*.png masters (privacy-checked, MANIFEST.json). Output: public/proof/crop/<name>-<w>.webp
# plus public/proof/workflow-os-*-1440-2000.webp for the /workflow-os sticky stage.
from PIL import Image
import json
S='/data/projects/innovaconsult.ca/.proof-staging/'
O='/data/projects/innovaconsult.ca/public/proof/crop/'
C={
 'wos-map-88':('workflow-os-opportunity-map-1440.png',(1889,619,2831,1080)),
 'wos-overview-234':('workflow-os-overview-1440.png',(2369,588,2831,824)),
 'wos-designer-60':('workflow-os-designer-1440.png',(1439,544,2369,789)),
 'wos-impl-panel':('workflow-os-overview-1440.png',(1886,870,2831,1446)),
 'wos-impact-kpi':('workflow-os-impact-1440.png',(1675,569,2831,1034)),
 'wos-home-map':('workflow-os-opportunity-map-1440.png',(1008,634,2831,1584)),
 'wos-home-designer':('workflow-os-designer-1440.png',(513,360,2831,1570)),
 'wos-home-impact':('workflow-os-impact-1440.png',(513,569,2831,1778)),
 'uafest-form':('uafest-applications-1440.png',(1318,158,2578,965)),
 'foundwall-hero':('foundwall-home-1440.png',(331,288,2534,1728)),
 'babakokum-rules2':('babakokum-rules-tablet.png',(60,130,1150,700)),
 'openfield-report':('openfield-season-report-1440.png',(0,0,1814,864)),
}
out={}
for n,(f,box) in C.items():
  im=Image.open(S+f).convert('RGB').crop(box)
  W,H=im.size; ws=[w for w in (480,800,1200,1600,2000) if w<W]+[W]
  ws=sorted(set(ws)); out[n]={'w':W,'h':H,'ws':ws}
  for w in ws:
    im.resize((w,round(H*w/W)),Image.LANCZOS).save(f'{O}{n}-{w}.webp','WEBP',quality=82,method=6)
# 2000w variants of full WOS screens for the big sticky stage
for n in ['overview','opportunity-map','designer','impact']:
  im=Image.open(f'{S}workflow-os-{n}-1440.png').convert('RGB')
  im.resize((2000,1250),Image.LANCZOS).save(f'/data/projects/innovaconsult.ca/public/proof/workflow-os-{n}-1440-2000.webp','WEBP',quality=80,method=6)
print(json.dumps(out))
